# js-uralsjs-templator
uralsjs html templator dsl


## Description
Extendable html-templator dsl with full typescript support.
May be used for building models of html-trees, easy-comparable, and 
easy-to-difference-calculatable. May be extended by custom tags.


## Example
```typescript
import * as htmlDsl from "uralsjs-templator"
import * as assert from "assert"

const given = htmlDsl.typecheck(['html', {},
    ['div', {
        'class': 'w-100',
        'style': 'height: 50px;'
        },
        ['input', {
            name: 'test-input',
            val: 'test-val'
            }, 
            ['textarea'] //input is single tag, children "textarea" will be ignored
        ],
        ['button', {
            'class': 'btn btn-success'
        }, "Submit"],
        ['input'],
    ] 
], htmlDsl.html.config)
const result = htmlDsl.tag.render(given, htmlDsl.html.config)
const nominal = '<html>' 
    + '\n  <div class="w-100" style="height: 50px;">' 
    + '\n    <input name="test-input" val="test-val">' 
    + '\n    <button class="btn btn-success">' 
    + '\n      Submit</button>' 
    + '\n    <input></div></html>';
assert.strictEqual(result, nominal)
```


## Extending
For understanding package extension possibilities you should understand concept of `config`:
```typescript
export type T<Tag extends string> = Record< //config type
    Tag, //Known tags for templator: for example 'div' | 'form' | etc..
    (
        params: Record<string, string|number>, 
        content: string
    ) => string //Known functions for print html by this tags
>
```

`config` uses as list of instructions for rendering html by dsl-phrase calls `tag`:
```typescript
export type T<Tag extends string> = [ //tag type
        Tag, 
        Record<string, string|number>?, 
        ...T<Tag>[]
    ] | string
```
default renderer for html tags contains in inner `./html` file

Use `tags` and `configs` you may compose typechecked phrases and render them into html
```typescript
//Declaration of inner package's index file:

//Uses for rendering tags composition into html.
export const render = <Tag extends string>(
    t: T<Tag>, //tags composition
    conf: config.T<Tag>,
    deep: number = 0
): string => {...}

//Uses for compiler's typechecking tags composition. Doesn't make sense in runtime.
export const typecheck = <Tag extends string>(
    t: T<Tag>, //tags composition
    conf: config.T<Tag>,
): T<Tag> => t
```

You may declare your own renderer for your own tags, applies renderer type, and
spread it with default renderer or as only one renderer in your project.
Default renderer builded by spreading single-tag and double-tag renderers:
```typescript
//content of "./html/index" file:
import * as singleTag from "./single-tag"
import * as doubleTag from "./double-tag"
import * as c from "../config"

export const config: c.T<
    (typeof singleTag.literals[number])|(typeof doubleTag.literals[number])
> = {
    ...singleTag.config, 
    ...doubleTag.config
}
//For details or default renderers realization look "./dsl/single-tag.ts"
//and "./dsl/double-tag.ts" files
```


## License
MIT


## Contacts
Anatoly Starodubtsev
tostar74@mail.ru