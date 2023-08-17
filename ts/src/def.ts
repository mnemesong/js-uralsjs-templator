import * as dsl from "./dsl"

export const renderer = {
    ...dsl.singleTag.renderer, 
    ...dsl.doubleTag.renderer
}