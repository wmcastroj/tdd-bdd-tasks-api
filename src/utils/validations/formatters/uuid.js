export const Uuid = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i

export const isUuid = value => (
   Uuid.test(value)
)
