export * as doubleTag from "./double-tag"
export * as singleTag from "./single-tag"

import * as singleTag from "./single-tag"
import * as doubleTag from "./double-tag"
import * as c from "../config"

export const config: c.T<
    (typeof singleTag.literals[number])|(typeof doubleTag.literals[number])
> = {
    ...singleTag.config, 
    ...doubleTag.config
}