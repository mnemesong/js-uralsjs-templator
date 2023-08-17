import * as type from "superstruct";
export declare const t: type.Struct<Function, null>;
export type T<Tag extends string> = Record<Tag, (params: Record<string, string | number>, content: string) => string>;
