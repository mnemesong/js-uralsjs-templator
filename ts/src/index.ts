export * as config from "./config"
export * as html from "./html"
import * as config from "./config"

export type T<Tag extends string> = [Tag, Record<string, string|number>?, ...T<Tag>[]] | string

export const render = <Tag extends string>(
    t: T<Tag>, 
    conf: config.T<Tag>,
    deep: number = 0
): string => {
    if(typeof t === 'string') {
        return  t
    }
    const childs = t.filter((v, i) => i > 1) as T<Tag>[]
    const content = childs.map(tag => "\n" + ('  '.repeat(deep + 1)) 
            + render(tag, conf, deep + 1))
        .join("")
    return conf[t[0]]((t.length > 1 ? t[1] : {}), content)
}

export const typecheck = <Tag extends string>(
    t: T<Tag>, 
    renderFuncs: config.T<Tag>,
) => t