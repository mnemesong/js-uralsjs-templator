export * as record from "./record"

export type T<Tag extends string> = Record<Tag, (
    params: Record<string, string|number>, 
    content: string
) => string>