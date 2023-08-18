import * as index from "../../src"
import * as assert from "assert"
import { describe, it } from "mocha"

describe("test double-tag", () => {
    it("test 1", () => {
        assert.strictEqual(Object.keys(index.html.doubleTag.config).length, 107)
    })
    it("test 2", () => {
        assert.ok(Object.keys(index.html.doubleTag.config).includes("textarea"))
    })
})