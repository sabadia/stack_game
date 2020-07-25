
$(document).ready(function () {
  $("h1").css({
    color: "black",
    border: "2px solid green",
  });
});



function draw() {
  let canvas : CanvasElement = new CanvasElement(document.createElement('canvas') as HTMLCanvasElement);
  canvas.createOval(550, 550);
  // canvas.createFixedSquare(550, 750);
}
class CanvasElement {
  public canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;
  ovalRadiusX: number = 35;
  ovalRadiusY: number = 105;
  rectangleWidth: number = 60;
  rectangleHeight: number = 60;
  bufferArea : number = 5;
   constructor(canvas: HTMLCanvasElement){
     this.canvas = canvas;
   }
  createFixedSquare(positionX: number, positionY: number, fillColor: string = "orange", strokeColor: string = "red") {
    let canvas = this.canvas;
    canvas.width = positionX;
    canvas.height = positionY;

    if (canvas.getContext) {
      let context = canvas.getContext("2d");
      let centerX = canvas.width / 2;
      let centerY = canvas.height / 2;
      let width = this.rectangleWidth;
      let height = this.rectangleHeight;
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

  createOval(positionX: number, positionY: number, fillColor: string = "orange", strokeColor: string = "red") {
    let canvas = this.canvas;
    canvas.width = this.ovalRadiusY*2+10;
    canvas.height = this.ovalRadiusX*2+10;
    canvas.style.left = "100px";
    canvas.style.top = "100px";
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


