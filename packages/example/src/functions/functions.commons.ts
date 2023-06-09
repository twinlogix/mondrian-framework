import { Types } from '../types'
import m from '@mondrian-framework/module'
import { PrismaClient } from '@prisma/client'

export type AuthInfo = { userId: number }
export type SharedContext = { auth?: AuthInfo; prisma: PrismaClient }
export default m.functionBuilder<Types, SharedContext>()
