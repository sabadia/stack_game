function draw() {
    var canvas = new CanvasElement();
    var xDifference = 126;
    var yDifference = 30;
    initializeBoard(canvas, xDifference, yDifference);
    makeAllItemsDraggable();
    droppableWithDragebles();
}
function droppableWithDragebles() {
    $("#yD").droppable({
        drop: function (event, ui) {
            // here $(this) is droppable where the drop occured.
            var dragID = ui.draggable.attr('id');
            console.log(dragID);
            console.log("\n");
        }
    });
    // $( "#yD, #rD, #bD" ).droppable({
    //   drop: function( vent: any, ui: any ) {
    //     $( this )
    //       .addClass( "ui-state-highlight" )
    //       .find( "p" );
    //   }
    // });
}
function makeAllItemsDraggable() {
    var _loop_1 = function (i) {
        var id = "#y" + i + ", #b" + i + ", #r" + i;
        $(function () {
            $(id).draggable({ snap: true, revert: "invalid" });
        });
    };
    for (var i = 1; i <= 3; i++) {
        _loop_1(i);
    }
}
var y1, y2, y3, r1, r2, r3, b1, b2, b3;
function initializeBoard(canvas, xDifference, yDifference) {
    var yellowBody = "#FFF2CC";
    var yellowBorder = "#DCC06C";
    var redBody = "#F8CECC";
    var redBorder = "#B85450";
    var blueBody = "#DAE8FC";
    var blueBorder = "#829FCA";
    canvas.createDrppableArea(400, 90, yellowBody, "yD");
    canvas.createDrppableArea(400 + xDifference, 90, redBody, "rD");
    canvas.createDrppableArea(400 + 2 * xDifference, 90, blueBody, "bD");
    y1 = canvas.createOval(400, 515, yellowBody, yellowBorder, "y1");
    y2 = canvas.createOval(400, 515 - yDifference, yellowBody, yellowBorder, "y2");
    r1 = canvas.createOval(400 + xDifference, 515, redBody, redBorder, "r1");
    r2 = canvas.createOval(400 + xDifference, 515 - yDifference, redBody, redBorder, "r2");
    r3 = canvas.createOval(400 + xDifference, 515 - 2 * yDifference, redBody, redBorder, "r3");
    y3 = canvas.createOval(400 + xDifference, 515 - 3 * yDifference, yellowBody, yellowBorder, "y3");
    b1 = canvas.createOval(400 + 2 * xDifference, 515, blueBody, blueBorder, "b1");
    b2 = canvas.createOval(400 + 2 * xDifference, 515 - yDifference, blueBody, blueBorder, "b2");
    b3 = canvas.createOval(400 + 2 * xDifference, 515 - 2 * yDifference, blueBody, blueBorder, "b3");
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
        this.droppableHeight = 460;
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
    CanvasElement.prototype.createOval = function (positionX, positionY, fillColor, strokeColor, id) {
        if (fillColor === void 0) { fillColor = "orange"; }
        if (strokeColor === void 0) { strokeColor = "red"; }
        var canvas = document.createElement('canvas');
        canvas.id = id;
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
    CanvasElement.prototype.createDrppableArea = function (positionX, positionY, strokeColor, id) {
        if (strokeColor === void 0) { strokeColor = "black"; }
        var canvas = document.createElement('canvas');
        canvas.id = id;
        canvas.width = this.ovalRadiusY * 2 + 5;
        canvas.height = this.droppableHeight;
        canvas.style.left = positionX + "px";
        canvas.style.top = positionY + "px";
        canvas.style.position = "absolute";
        if (canvas.getContext) {
            var context = canvas.getContext("2d");
            var width = this.ovalRadiusY * 2 + 5;
            var height = this.droppableHeight;
            if (context != null) {
                context.beginPath();
                context.rect(0, 0, width, height);
                context.strokeStyle = "#000";
                context.stroke();
                document.body.appendChild(canvas);
            }
        }
    };
    return CanvasElement;
}());
