"use strict";
exports.__esModule = true;
$(document).ready(function () {
    $("h1").css({
        color: "black",
        border: "2px solid green"
    });
});
var ovalRadiusX = 35;
var ovalRadiusY = 105;
var rectangleWidth = 60;
var rectangleHeight = 60;
function draw() {
    createOval(550, 550);
    createFixedSquare(550, 750);
}
function createFixedSquare(positionX, positionY, fillColor, strokeColor) {
    if (fillColor === void 0) { fillColor = "orange"; }
    if (strokeColor === void 0) { strokeColor = "red"; }
    var canvas = document.createElement('canvas');
    canvas.width = positionX;
    canvas.height = positionY;
    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var width = rectangleWidth;
        var height = rectangleHeight;
        if (context != null) {
            context.beginPath();
            // context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.rect(centerX, centerY, width, height);
            context.fillStyle = fillColor;
            context.fill();
            context.strokeStyle = strokeColor;
            context.stroke();
            document.body.appendChild(canvas);
        }
    }
}
function createOval(positionX, positionY, fillColor, strokeColor) {
    if (fillColor === void 0) { fillColor = "orange"; }
    if (strokeColor === void 0) { strokeColor = "red"; }
    var canvas = document.createElement('canvas');
    canvas.width = positionX;
    canvas.height = positionY;
    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radiusX = 35;
        var radiusY = 105;
        if (context != null) {
            context.beginPath();
            // context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.ellipse(centerX, centerY, radiusX, radiusY, Math.PI / 2, 0, 2 * Math.PI, false);
            context.fillStyle = fillColor;
            context.fill();
            context.strokeStyle = strokeColor;
            context.stroke();
            document.body.appendChild(canvas);
        }
    }
}
