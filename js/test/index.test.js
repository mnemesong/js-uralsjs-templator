"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index = __importStar(require("../src"));
var assert = __importStar(require("assert"));
var mocha_1 = require("mocha");
var eq = __importStar(require("deep-equal"));
(0, mocha_1.describe)("test variative cases", function () {
    (0, mocha_1.it)("test 1", function () {
        var given = index.typecheck(['html', {},
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
        ], index.html.config);
        var result = index.render(given, index.html.config);
        var nominal = '<html>'
            + '\n  <div class="w-100" style="height: 50px;">'
            + '\n    <input name="test-input" val="test-val">'
            + '\n    <button class="btn btn-success">'
            + '\n      Submit</button>'
            + '\n    <input></div></html>';
        assert.strictEqual(result, nominal);
    });
    (0, mocha_1.it)("test true assertion", function () {
        var t1 = ['input', {
                name: 'test-input',
                val: 'test-val'
            },
            ['textarea']
        ];
        var t2 = ['input', {
                name: 'test-input',
                val: 'test-val'
            },
            ['textarea']
        ];
        assert.ok(eq.default(t1, t2));
    });
    (0, mocha_1.it)("test false 1 assertion", function () {
        var t1 = ['input', {
                name: 'test-input',
                val: 'test-val'
            },
            ['textarea']
        ];
        var t2 = ['input', {
                name: 'test-input',
                val: 'test-val'
            },
            ['input']
        ];
        assert.ok(!eq.default(t1, t2));
    });
    (0, mocha_1.it)("test false 2 assertion", function () {
        var t1 = ['input', {
                name: 'test-input',
                val: 'test-val'
            },
            ['textarea']
        ];
        var t2 = ['input', {
                name: 'test-input',
                val: 'test-val',
                some: "some 3",
            },
            ['textarea']
        ];
        assert.ok(!eq.default(t1, t2));
    });
});
