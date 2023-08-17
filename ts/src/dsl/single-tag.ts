import * as a from "./abstracts"

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

export type T = a.render.T<typeof literals[number]>

export const renderer: T = {
} as T
literals.forEach(l => {
    renderer[l] = (params, content) => {
        return `<${l}${a.record.render(params)}>`
    }
})