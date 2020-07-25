$(document).ready(function () {
    $("h1").css({
        color: "black",
        border: "2px solid green"
    });
});
function draw() {
    var canvas = new CanvasElement();
    var xDifference = 126;
    var yDifference = 30;
    initializeBoard(canvas, xDifference, yDifference);
}
function initializeBoard(canvas, xDifference, yDifference) {
    var yellowBody = "#FFF2CC";
    var yellowBorder = "#DCC06C";
    var redBody = "#F8CECC";
    var redBorder = "#B85450";
    var blueBody = "#DAE8FC";
    var blueBorder = "#829FCA";
    canvas.createOval(400, 515, yellowBody, yellowBorder);
    canvas.createOval(400, 515 - yDifference, yellowBody, yellowBorder);
    canvas.createOval(400 + xDifference, 515, redBody, redBorder);
    canvas.createOval(400 + xDifference, 515 - yDifference, redBody, redBorder);
    canvas.createOval(400 + xDifference, 515 - 2 * yDifference, redBody, redBorder);
    canvas.createOval(400 + xDifference, 515 - 3 * yDifference, yellowBody, yellowBorder);
    canvas.createOval(400 + 2 * xDifference, 515, blueBody, blueBorder);
    canvas.createOval(400 + 2 * xDifference, 515 - yDifference, blueBody, blueBorder);
    canvas.createOval(400 + 2 * xDifference, 515 - 2 * yDifference, blueBody, blueBorder);
    canvas.createFixedSquare(420, 565, yellowBody, yellowBorder);
    canvas.createFixedSquare(420 + xDifference, 565, redBody, redBorder);
    canvas.createFixedSquare(420 + 2 * xDifference, 565, blueBody, blueBorder);
}
var CanvasElement = /** @class */ (function () {
    function CanvasElement() {
        this.ovalRadiusX = 15;
        this.ovalRadiusY = 50;
        this.rectangleWidth = 60;
        this.rectangleHeight = 60;
        this.bufferArea = 5;
    }
    CanvasElement.prototype.createFixedSquare = function (positionX, positionY, fillColor, strokeColor) {
        if (fillColor === void 0) { fillColor = "orange"; }
        if (strokeColor === void 0) { strokeColor = "red"; }
        var canvas = document.createElement('canvas');
        canvas.width = this.rectangleWidth;
        canvas.height = this.rectangleHeight;
        canvas.style.left = positionX + "px";
        canvas.style.top = positionY + "px";
        canvas.style.position = "absolute";
        if (canvas.getContext) {
            var context = canvas.getContext("2d");
            var width = this.rectangleWidth;
            var height = this.rectangleHeight;
            if (context != null) {
                context.beginPath();
                context.rect(0, 0, width, height);
                context.fillStyle = fillColor;
                context.fill();
                context.strokeStyle = strokeColor;
                context.stroke();
                document.body.appendChild(canvas);
            }
        }
    };
    CanvasElement.prototype.createOval = function (positionX, positionY, fillColor, strokeColor) {
        if (fillColor === void 0) { fillColor = "orange"; }
        if (strokeColor === void 0) { strokeColor = "red"; }
        var canvas = document.createElement('canvas');
        canvas.width = this.ovalRadiusY * 2 + this.bufferArea;
        canvas.height = this.ovalRadiusX * 2 + this.bufferArea;
        canvas.style.left = positionX + "px";
        canvas.style.top = positionY + "px";
        canvas.style.position = "absolute";
        if (canvas.getContext) {
            var context = canvas.getContext("2d");
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
            var radiusX = this.ovalRadiusX;
            var radiusY = this.ovalRadiusY;
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
    };
    return CanvasElement;
}());
