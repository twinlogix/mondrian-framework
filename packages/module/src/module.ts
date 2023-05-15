import { Infer, InferProjection, InferReturn, LazyType, Types, decode, is } from '@mondrian/model'
import { Logger, buildLogger } from './utils'
import { GenericProjection, getProjectedType } from './projection'
import { JSONType } from '@mondrian/utils'

export type Function<T extends Types, I extends keyof T, O extends keyof T, Context> = Infer<T[I]> extends infer Input
  ? InferReturn<T[O]> extends infer Output
    ? InferProjection<T[O]> extends infer Fields
      ? {
          input: I
          output: O
          apply: (args: {
            input: Input
            fields: Fields | undefined
            operationId: string
            context: Context
            log: Logger
          }) => Promise<Output>
        }
      : never
    : never
  : never
export type GenericFunction<TypesName extends string = string> = {
  input: TypesName
  output: TypesName
  apply: (args: { input: any; fields: any; context: any; operationId: string; log: Logger }) => Promise<unknown>
}

export type Functions<Types extends string = string> = Record<string, GenericFunction<Types>>

export function functionBuilder<const T extends Types, Context>(): <const I extends keyof T, const O extends keyof T>(
  f: Function<T, I, O, Context>,
) => Function<T, I, O, Context> {
  function builder<const I extends keyof T, const O extends keyof T>(
    f: Function<T, I, O, Context>,
  ): Function<T, I, O, Context> {
    return f
  }
  return builder
}

export function functions<const F extends Functions>(functions: F): F {
  return functions
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
export type ContextType<F extends Functions> = {
  [K in keyof F]: F[K] extends {
    apply: (args: { context: infer C; input: any; fields: any; operationId: string }) => any
  }
    ? C
    : never
} extends infer C
  ? C extends Record<keyof F, unknown>
    ? UnionToIntersection<C[keyof F]>
    : never
  : never

export type GenericModule = {
  name: string
  types: Types
  functions: Record<string, GenericFunction>
}

export type Module<T extends Types, F extends Functions<keyof T extends string ? keyof T : string>> = {
  name: string
  types: T
  functions: F
}

export function module<const T extends Types, const F extends Functions<keyof T extends string ? keyof T : string>>(
  module: Module<T, F>,
): Module<T, F> {
  const functions = Object.fromEntries(
    Object.entries(module.functions).map(([functionName, functionBody]) => {
      const outputType = module.types[functionBody.output]
      const f: GenericFunction = {
        ...functionBody,
        async apply(args) {
          const result = await functionBody.apply(args)
          const projectedType = getProjectedType(outputType, args.fields as GenericProjection)
          const outputDecoded = decode(projectedType, result as JSONType)
          if (!outputDecoded.pass) {
            const m = JSON.stringify({ fields: args.fields, errors: outputDecoded.errors })
            args.log(`Projection is not respected: ${m}`, 'error')
          }
          return result
        },
      }
      return [functionName, f]
    }),
  )
  return { ...module, functions: functions as F }
}