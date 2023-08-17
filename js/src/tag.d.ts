import * as dsl from "./dsl";
export type T<Tag extends string> = [Tag, Record<string, string | number>?, ...T<Tag>[]] | string;
export declare const render: <Tag extends string>(t: T<Tag>, renderFuncs: dsl.abstracts.render.T<Tag>, deep?: number) => string;
export declare const typecheck: <Tag extends string>(t: T<Tag>, renderFuncs: dsl.abstracts.render.T<Tag>) => T<Tag>;
