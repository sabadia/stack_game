
$(document).ready(function () {
  $("h1").css({
    color: "black",
    border: "2px solid green",
  });
});




function draw() {
  let canvas : CanvasElement = new CanvasElement();
  let xDifference = 126;
  let yDifference = 30; 
  initializeBoard( canvas, xDifference,yDifference);
}

function initializeBoard(canvas:CanvasElement, xDifference:number,yDifference:number){
  let yellowBody:string = "#DCC06C";
  let yellowBorder:string = "#DCC06C";
  let redBody:string = "#DCC06C";
  let redBorder:string = "#DCC06C";
  let blueBody:string = "#DCC06C";
  let blueBorder:string = "#DCC06C";
  
  canvas.createOval(400, 515 );
  canvas.createOval(400, 515 - yDifference);
  canvas.createOval(400 + xDifference, 515);
  canvas.createOval(400 + xDifference, 515-yDifference);
  canvas.createOval(400 + xDifference, 515-2*yDifference);
  canvas.createOval(400 + xDifference, 515-3*yDifference);
  canvas.createOval(400 + 2*xDifference, 515);
  canvas.createOval(400 + 2*xDifference, 515-yDifference);
  canvas.createOval(400 + 2*xDifference, 515-2*yDifference);

  canvas.createFixedSquare(420, 565);
  canvas.createFixedSquare(420+xDifference, 565);
  canvas.createFixedSquare(420+2*xDifference, 565);
}
class CanvasElement {
  
  ovalRadiusX: number = 15;
  ovalRadiusY: number = 50;
  rectangleWidth: number = 60;
  rectangleHeight: number = 60;
  bufferArea : number = 5;

  createFixedSquare(positionX: number, positionY: number, fillColor: string = "orange", strokeColor: string = "red") {
    let canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement
    canvas.width = this.rectangleWidth;
    canvas.height = this.rectangleHeight;
    canvas.style.left = positionX + "px";
    canvas.style.top = positionY + "px";
    canvas.style.position = "absolute";

    if (canvas.getContext) {
      let context = canvas.getContext("2d");
      let width = this.rectangleWidth;
      let height = this.rectangleHeight;
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
  }

  createOval(positionX: number, positionY: number, fillColor: string = "orange", strokeColor: string = "red") {
    let canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement
    canvas.width = this.ovalRadiusY*2+this.bufferArea;
    canvas.height = this.ovalRadiusX*2+this.bufferArea;
    canvas.style.left = positionX + "px";
    canvas.style.top = positionY + "px";
    canvas.style.position = "absolute";
    if (canvas.getContext) {
      let context = canvas.getContext("2d");
      let centerX = canvas.width / 2;
      let centerY = canvas.height / 2;
      let radiusX = this.ovalRadiusX;
      let radiusY = this.ovalRadiusY;
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
}


