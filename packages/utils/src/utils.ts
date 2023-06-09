export type JSONType = string | number | boolean | null | { [K in string]: JSONTypeInternal } | JSONType[]
export type JSONTypeInternal =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [K in string]: JSONTypeInternal }
  | JSONType[]

export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never

export function assertNever(t: never): never {
  throw new Error(`Unreachable`)
}

export function setTraversingValue(value: unknown, path: string, object: Record<string, unknown>) {
  const [head, ...tail] = path.split('.')
  if (tail.length === 0) {
    object[head] = value
    return
  }
  if (!object[head]) {
    object[head] = {}
  }
  setTraversingValue(value, tail.join('.'), object[head] as Record<string, unknown>)
}

export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

//https://github.com/microsoft/TypeScript/issues/17002
export const isArray = Array.isArray as <T extends readonly any[]>(obj: unknown) => obj is T
