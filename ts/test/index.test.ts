import * as index from "../src"
import * as assert from "assert"
import { describe, it } from "mocha"
import * as eq from "deep-equal"

type DSL = index.tag.T<keyof typeof index.def.renderer>

describe("test variative cases", () => {
    it("test 1", () => {
        const given: DSL = index.tag.typecheck(['html', {},
            ['div', {
                'class': 'w-100',
                'style': 'height: 50px;'
                },
                ['input', {
                    name: 'test-input',
                    val: 'test-val'
                    }, 
                    ['textarea']
                ],
                ['button', {
                    'class': 'btn btn-success'
                }, "Submit"],
                ['input'],
            ] 
        ], index.def.renderer)
        const result = index.tag.render(given, index.def.renderer)
        const nominal = '<html>' 
            + '\n  <div class="w-100" style="height: 50px;">' 
            + '\n    <input name="test-input" val="test-val">' 
            + '\n    <button class="btn btn-success">' 
            + '\n      Submit</button>' 
            + '\n    <input></div></html>';
        assert.strictEqual(result, nominal)
    })
    
    it("test true assertion", () => {
        const t1 = ['input', {
            name: 'test-input',
            val: 'test-val'
            }, 
            ['textarea']
        ];
        const t2 = ['input', {
            name: 'test-input',
            val: 'test-val'
            }, 
            ['textarea']
        ];
        assert.ok(eq.default(t1, t2))
    })

    it("test false 1 assertion", () => {
        const t1 = ['input', {
            name: 'test-input',
            val: 'test-val'
            }, 
            ['textarea']
        ];
        const t2 = ['input', {
            name: 'test-input',
            val: 'test-val'
            }, 
            ['input']
        ];
        assert.ok(!eq.default(t1, t2))
    })

    it("test false 2 assertion", () => {
        const t1 = ['input', {
            name: 'test-input',
            val: 'test-val'
            }, 
            ['textarea']
        ];
        const t2 = ['input', {
            name: 'test-input',
            val: 'test-val',
            some: "some 3",
            }, 
            ['textarea']
        ];
        assert.ok(!eq.default(t1, t2))
    })
})