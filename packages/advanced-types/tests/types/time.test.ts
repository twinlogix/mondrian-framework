import { m } from '../../src/index'
import { decode, encode, validate } from '@mondrian-framework/model'
import { test, expect } from 'vitest'

const time = m.time()

test('Time - encode', async () => {
  expect(encode(time, new Date('2023-01-01T00:00:00.223Z'))).toBe('00:00:00.223Z')
})

test('Time - decode', async () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  const validTimes = [
    ['00:00:00Z', new Date(Date.UTC(year, month, day))],
    ['00:00:59Z', new Date(Date.UTC(year, month, day, 0, 0, 59))],
    ['10:30:02.1Z', new Date(Date.UTC(year, month, day, 10, 30, 2, 100))],
    ['09:09:06.13Z', new Date(Date.UTC(year, month, day, 9, 9, 6, 130))],
    ['10:00:11.003Z', new Date(Date.UTC(year, month, day, 10, 0, 11, 3))],
    ['16:10:20.1359945Z', new Date(Date.UTC(year, month, day, 16, 10, 20, 135))],
    ['00:00:00+01:30', new Date(Date.UTC(year, month, day, 22, 30) - 24 * 60 * 60 * 1000)],
    ['00:00:30.3-01:30', new Date(Date.UTC(year, month, day, 1, 30, 30, 300))],
  ]
  const invalidTimes = [
    'Invalid time',
    '2016-01-01T00:00:00.223Z',
    '10:30:02.Z',
    '00:00:00z',
    '26:00:00Z',
    '00:100:00Z',
    '00:00:00.45+0130',
    '00:00:00.45+01',
  ]

  validTimes.forEach((t) => expect(decode(time, t[0])).toStrictEqual({ success: true, value: t[1] }))
  invalidTimes.forEach((t) => expect(decode(time, t[0]).success).toBe(false))
})

test('Time - valid', async () => {})

test('Time - invalid', async () => {})
