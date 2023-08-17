import * as type from 'superstruct';
export declare const t: type.Struct<Record<string, string | number>, null>;
export type T = type.Infer<typeof t>;
export declare const splash: (t1: T, t2: T) => T;
export declare const render: (t: T) => string;
