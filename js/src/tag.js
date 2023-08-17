"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typecheck = exports.render = void 0;
var render = function (t, renderFuncs, deep) {
    if (deep === void 0) { deep = 0; }
    if (typeof t === 'string') {
        return t;
    }
    var childs = t.filter(function (v, i) { return i > 1; });
    var content = childs.map(function (tag) { return "\n" + ('  '.repeat(deep + 1))
        + (0, exports.render)(tag, renderFuncs, deep + 1); })
        .join("");
    return renderFuncs[t[0]]((t.length > 1 ? t[1] : {}), content);
};
exports.render = render;
var typecheck = function (t, renderFuncs) { return t; };
exports.typecheck = typecheck;
