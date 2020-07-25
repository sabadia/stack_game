$(document).ready(function () {
  $("h1").css({
    color: "black",
    border: "2px solid green",
  });
});

export {}

let ovalRadiusX:number = 35;
let ovalRadiusY:number = 105;
let rectangleWidth : number = 60;
let rectangleHeight : number = 60;
function draw() {
    createOval(550 , 550);
    createFixedSquare(550,750);
}

function createFixedSquare(positionX: number , positionY: number , fillColor: string = "orange" , strokeColor:string = "red"){
    let canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;
    canvas.width = positionX;
    canvas.height = positionY;
    if (canvas.getContext) {
        let context = canvas.getContext("2d");
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;
        let width = rectangleWidth;
        let height = rectangleHeight;
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

function createOval(positionX: number , positionY: number , fillColor: string = "orange" , strokeColor:string = "red"){
    let canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;
    canvas.width = positionX;
    canvas.height = positionY;
    if (canvas.getContext) {
        let context = canvas.getContext("2d");
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;
        let radiusX = 35;
        let radiusY = 105;
        if (context != null) {
            context.beginPath();
            // context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
           
            context.ellipse(centerX, centerY, radiusX, radiusY, Math.PI / 2 , 0, 2 * Math.PI , false);
            
            context.fillStyle = fillColor;
            context.fill();
            context.strokeStyle = strokeColor;
            context.stroke();
            document.body.appendChild(canvas);
        }
    }
}


