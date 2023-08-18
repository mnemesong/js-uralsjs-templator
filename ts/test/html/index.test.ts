import * as index from "../../src"
import * as assert from "assert"
import { describe, it } from "mocha"

describe("test html", () => {
    it("test 1", () => {
        assert.ok(Object.keys(index.html.config).includes("hr"))
    })
    it("test 2", () => {
        assert.ok(Object.keys(index.html.config).includes("textarea"))
    })
})