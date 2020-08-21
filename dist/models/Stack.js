"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Global_1 = require("./Global");
var Stack = /** @class */ (function (_super) {
    __extends(Stack, _super);
    function Stack(color, positionX, positionY, width, height, circleList) {
        if (circleList === void 0) { circleList = []; }
        var _this = _super.call(this, positionX, positionY) || this;
        _this.color = color;
        _this.width = width;
        _this.height = height;
        _this.circleList = circleList;
        return _this;
    }
    Stack.prototype.push = function (object) {
        throw new Error("Method not implemented.");
    };
    Stack.prototype.pop = function (index) {
        throw new Error("Method not implemented.");
    };
    return Stack;
}(Global_1.Position));
exports.Stack = Stack;
