import { DecodeOptions, decode } from './decoder'
import { encode } from './encoder'
import { Result, success } from './result'
import { Infer, LazyType } from './type-system'
import { validate } from './validate'
import { JSONType } from '@mondrian-framework/utils'

export function decodeAndValidate<const T extends LazyType>(
  type: T,
  value: unknown,
  opts?: DecodeOptions,
): Result<Infer<T>> {
  const decoded = decode(type, value, opts)
  if (!decoded.success) {
    return decoded
  }
  const isCheck = validate(type, decoded.value)
  if (!isCheck.success) {
    return isCheck
  }
  return isCheck
}

export function validateAndEncode<const T extends LazyType>(type: T, value: unknown): Result<JSONType> {
  const isCheck = validate(type, value)
  if (!isCheck.success) {
    return isCheck
  }
  const encoded = encode(type, isCheck.value)
  return success(encoded)
}
