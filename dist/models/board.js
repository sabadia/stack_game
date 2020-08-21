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
exports.Board = void 0;
var Global_1 = require("./Global");
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board(positionX, positionY, width, height, stackList) {
        if (stackList === void 0) { stackList = []; }
        var _this = _super.call(this, positionX, positionY) || this;
        _this.width = width;
        _this.height = height;
        _this.stackList = stackList;
        return _this;
    }
    Board.prototype.push = function (object) {
        throw new Error("Method not implemented.");
    };
    Board.prototype.pop = function (index) {
        throw new Error("Method not implemented.");
    };
    return Board;
}(Global_1.Position));
exports.Board = Board;
