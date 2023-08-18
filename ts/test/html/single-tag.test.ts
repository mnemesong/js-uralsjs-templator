import * as index from "../../src"
import * as assert from "assert"
import { describe, it } from "mocha"

describe("test single-tag", () => {
    it("test 1", () => {
        assert.strictEqual(Object.keys(index.html.singleTag.config).length, 17)
    })
    it("test 2", () => {
        assert.ok(Object.keys(index.html.singleTag.config).includes("hr"))
    })
})