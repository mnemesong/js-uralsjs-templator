import * as c from "../config"

export const literals = [
    '!DOCTYPE',
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
] as const

export type T = c.T<typeof literals[number]>

const reducer = (
    acc: c.T<typeof literals[number]>, 
    el: string
): c.T<typeof literals[number]> => {
    const a = (params: c.record.T, content: string) => {
        return  `<${el}${c.record.render(params)}>`
    }
    return {...acc, ...{[el]: a}}
}

export const config: T = literals.reduce(reducer, {} as T)