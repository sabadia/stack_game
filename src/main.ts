
$(document).ready(function () {
  $("h1").css({
    color: "black",
    border: "2px solid green",
  });
});

function draw() {
  let canvas: CanvasElement = new CanvasElement();
  let xDifference = 126;
  let yDifference = 30;
  initializeBoard(canvas, xDifference, yDifference);
}

function initializeBoard(canvas: CanvasElement, xDifference: number, yDifference: number) {
  let yellowBody: string = "#FFF2CC";
  let yellowBorder: string = "#DCC06C";
  let redBody: string = "#F8CECC";
  let redBorder: string = "#B85450";
  let blueBody: string = "#DAE8FC";
  let blueBorder: string = "#829FCA";

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
class CanvasElement {

  ovalRadiusX: number = 15;
  ovalRadiusY: number = 50;
  rectangleWidth: number = 60;
  rectangleHeight: number = 60;
  bufferArea: number = 5;

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
    canvas.width = this.ovalRadiusY * 2 + this.bufferArea;
    canvas.height = this.ovalRadiusX * 2 + this.bufferArea;
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


