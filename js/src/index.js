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
exports.typecheck = exports.render = exports.html = exports.config = void 0;
exports.config = __importStar(require("./config"));
exports.html = __importStar(require("./html"));
var render = function (t, conf, deep) {
    if (deep === void 0) { deep = 0; }
    if (typeof t === 'string') {
        return t;
    }
    var childs = t.filter(function (v, i) { return i > 1; });
    var content = childs.map(function (tag) { return "\n" + ('  '.repeat(deep + 1))
        + (0, exports.render)(tag, conf, deep + 1); })
        .join("");
    return conf[t[0]]((t.length > 1 ? t[1] : {}), content);
};
exports.render = render;
var typecheck = function (t, renderFuncs) { return t; };
exports.typecheck = typecheck;
