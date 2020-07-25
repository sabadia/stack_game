
$(document).ready(function () {
  $("h1").css({
    color: "black",
    border: "2px solid green",
  });
});



function draw() {
  let canvas : CanvasElement = new CanvasElement();
  let xDifference = 0;
  let yDifference = 0; 
  canvas.createOval(400, 515);
 
  canvas.createFixedSquare(420, 570);
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
        // context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

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


