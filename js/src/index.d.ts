export * as config from "./config";
export * as html from "./html";
import * as config from "./config";
export type T<Tag extends string> = [Tag, Record<string, string | number>?, ...T<Tag>[]] | string;
export declare const render: <Tag extends string>(t: T<Tag>, conf: config.T<Tag>, deep?: number) => string;
export declare const typecheck: <Tag extends string>(t: T<Tag>, renderFuncs: config.T<Tag>) => T<Tag>;
