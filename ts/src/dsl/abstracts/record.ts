import * as type from 'superstruct'

export const t = type.record(
    type.string(),
    type.union([type.string(), type.number()])
)

export type T = type.Infer<typeof t>

export const splash = (t1: T, t2: T): T => ({...t1, ...t2})

export const render = (t: T) => Object
    .keys(t).map(k => ' ' + k + '="' 
        + ((typeof t[k] === 'string' ? t[k] : t[k].toString()) as string)
            .replace('"', '\\"') + '"')
    .join('')