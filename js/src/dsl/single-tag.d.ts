import * as a from "./abstracts";
export declare const literals: readonly ["!DOCTYPE", "area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
export type T = a.render.T<typeof literals[number]>;
export declare const renderer: T;
