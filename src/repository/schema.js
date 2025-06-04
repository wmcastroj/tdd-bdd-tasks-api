import { Type, Optional } from '@sinclair/typebox'

export const Create = Type.Object({
  title: Type.String({ minLength: 1 }),
  description: Type.String({ minLength: 1 }),
  completed: Optional(Type.Boolean({ default: false })),
}, { additionalProperties: false })