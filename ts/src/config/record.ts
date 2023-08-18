export type T = Record<string, string|number>

export const render = (t: T) => Object
    .keys(t).map(k => ' ' + k + '="' 
        + ((typeof t[k] === 'string' ? t[k] : t[k].toString()) as string)
            .replace('"', '\\"') + '"')
    .join('')