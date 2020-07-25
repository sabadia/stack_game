$(document).ready(function () {
    $("h1").css({
        color: "black",
        border: "2px solid green"
    });
});
function draw() {
    var canvas = new CanvasElement(document.createElement('canvas'));
    canvas.createOval(550, 550);
    // canvas.createFixedSquare(550, 750);
}
var CanvasElement = /** @class */ (function () {
    function CanvasElement(canvas) {
        this.canvas = document.createElement('canvas');
        this.ovalRadiusX = 35;
        this.ovalRadiusY = 105;
        this.rectangleWidth = 60;
        this.rectangleHeight = 60;
        this.bufferArea = 5;
        this.canvas = canvas;
    }
    CanvasElement.prototype.createFixedSquare = function (positionX, positionY, fillColor, strokeColor) {
        if (fillColor === void 0) { fillColor = "orange"; }
        if (strokeColor === void 0) { strokeColor = "red"; }
        var canvas = this.canvas;
        canvas.width = positionX;
        canvas.height = positionY;
        if (canvas.getContext) {
            var context = canvas.getContext("2d");
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
            var width = this.rectangleWidth;
            var height = this.rectangleHeight;
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
    };
    CanvasElement.prototype.createOval = function (positionX, positionY, fillColor, strokeColor) {
        if (fillColor === void 0) { fillColor = "orange"; }
        if (strokeColor === void 0) { strokeColor = "red"; }
        var canvas = this.canvas;
        canvas.width = this.ovalRadiusY * 2 + 10;
        canvas.height = this.ovalRadiusX * 2 + 10;
        canvas.style.left = "100px";
        canvas.style.top = "100px";
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
