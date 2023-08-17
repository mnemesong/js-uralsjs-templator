import * as dsl from "./dsl"

export type T<Tag extends string> = [Tag, Record<string, string|number>?, ...T<Tag>[]] | string

export const render = <Tag extends string>(
    t: T<Tag>, 
    renderFuncs: dsl.abstracts.render.T<Tag>,
    deep: number = 0
): string => {
    if(typeof t === 'string') {
        return  t
    }
    const childs = t.filter((v, i) => i > 1) as T<Tag>[]
    const content = childs.map(tag => "\n" + ('  '.repeat(deep + 1)) 
            + render(tag, renderFuncs, deep + 1))
        .join("")
    return renderFuncs[t[0]]((t.length > 1 ? t[1] : {}), content)
}

export const typecheck = <Tag extends string>(
    t: T<Tag>, 
    renderFuncs: dsl.abstracts.render.T<Tag>,
) => t