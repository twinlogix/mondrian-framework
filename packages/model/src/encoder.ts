import { Infer, LazyType } from './type-system'
import { hasDecorator, lazyToType } from './utils'
import { validate } from './validate'
import { JSONType, assertNever } from '@mondrian-framework/utils'

export function encode<const T extends LazyType>(type: T, value: Infer<T>): JSONType {
  const result = encodeInternal(type, value)
  if (result === undefined) {
    return null
  }
  return result as JSONType
}

function encodeInternal(type: LazyType, value: unknown): unknown {
  const t = lazyToType(type)
  if (t.kind === 'boolean' || t.kind === 'enum' || t.kind === 'number' || t.kind === 'string') {
    return value
  }
  if (t.kind === 'custom') {
    return t.encode(value, t.opts)
  }
  if (t.kind === 'literal') {
    return t.value
  }
  if (t.kind === 'optional-decorator') {
    if (value === undefined) {
      return undefined
    }
    return encode(t.type, value)
  }
  if (t.kind === 'nullable-decorator') {
    if (value === null) {
      return null
    }
    return encode(t.type, value)
  }
  if (t.kind === 'default-decorator') {
    if (value === undefined && !hasDecorator(t.type, 'optional-decorator')) {
      return t.opts.default as JSONType
    }
    return encode(t.type, value)
  }
  if (t.kind === 'relation-decorator') {
    return encode(t.type, value)
  }
  if (t.kind === 'array-decorator') {
    const results: unknown[] = []
    for (const v of value as Array<JSONType>) {
      const r = encodeInternal(t.type, v)
      results.push(r === undefined ? null : r)
    }
    return results
  }
  if (t.kind === 'object') {
    const ret: { [K in string]: JSONType } = {}
    for (const [key, v] of Object.entries(value as object)) {
      const subtype = t.type[key]
      if (subtype) {
        const r = encode(subtype, v)
        if (r !== undefined) {
          ret[key] = r
        }
      }
    }
    for (const [key, subtype] of Object.entries(t.type)) {
      if (hasDecorator(subtype, 'default-decorator') && ret[key] === undefined) {
        const r = encode(subtype, undefined)
        if (r !== undefined) {
          ret[key] = r
        }
      }
    }
    return ret
  }
  if (t.kind === 'union-operator') {
    for (const subtype of Object.values(t.types)) {
      if (validate(subtype, value).success) {
        return encode(subtype, value)
      }
    }
    throw new Error('Invalid value for this union.')
  }

  assertNever(t)
}
