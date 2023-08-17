import * as type from "superstruct"

export const t = type.func()

export type T<Tag extends string> = Record<Tag, (
    params: Record<string, string|number>, 
    content: string
) => string>