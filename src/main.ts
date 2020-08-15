

function draw() {
  let canvas: CanvasElement = new CanvasElement();
  let xDifference = 126;
  let yDifference = 30;
  initializeBoard(canvas, xDifference, yDifference);
  makeAllItemsDraggable();
  droppableWithDragebles();
  
}


 function droppableWithDragebles() {

  $( "#yD" ).droppable({

    drop: function (event:any, ui:any) {
        // here $(this) is droppable where the drop occured.
        let dragID:string = ui.draggable.attr('id');
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

function makeAllItemsDraggable(){
  
  for(let i=1 ; i<=3 ; i++){
    let id: string = "#y" + i +", #b" + i + ", #r" + i;
    $( function() {
      $(id).draggable({ snap: true , revert: "invalid"});
    } );
  }
  
} 

let y1 , y2, y3 , r1, r2, r3, b1, b2, b3;

function initializeBoard(canvas: CanvasElement, xDifference: number, yDifference: number) {
  let yellowBody: string = "#FFF2CC";
  let yellowBorder: string = "#DCC06C";
  let redBody: string = "#F8CECC";
  let redBorder: string = "#B85450";
  let blueBody: string = "#DAE8FC";
  let blueBorder: string = "#829FCA";
  
  canvas.createDrppableArea(400, 90, yellowBody, "yD");
  canvas.createDrppableArea(400 + xDifference, 90, redBody, "rD");
  canvas.createDrppableArea(400 + 2 * xDifference, 90, blueBody, "bD");

  y1 = canvas.createOval(400, 515, yellowBody, yellowBorder , "y1");
  y2 = canvas.createOval(400, 515 - yDifference, yellowBody, yellowBorder, "y2");
  r1 = canvas.createOval(400 + xDifference, 515, redBody, redBorder, "r1");
  r2 = canvas.createOval(400 + xDifference, 515 - yDifference, redBody, redBorder,"r2");
  r3 = canvas.createOval(400 + xDifference, 515 - 2 * yDifference, redBody, redBorder,"r3");
  y3 = canvas.createOval(400 + xDifference, 515 - 3 * yDifference, yellowBody, yellowBorder,"y3");
  b1 = canvas.createOval(400 + 2 * xDifference, 515, blueBody, blueBorder,"b1");
  b2 = canvas.createOval(400 + 2 * xDifference, 515 - yDifference, blueBody, blueBorder,"b2");
  b3 = canvas.createOval(400 + 2 * xDifference, 515 - 2 * yDifference, blueBody, blueBorder,"b3");

  canvas.createFixedSquare(420, 565, yellowBody, yellowBorder);
  canvas.createFixedSquare(420 + xDifference, 565, redBody, redBorder);
  canvas.createFixedSquare(420 + 2 * xDifference, 565, blueBody, blueBorder);

  
}
class CanvasElement {

  ovalRadiusX: number = 15;
  ovalRadiusY: number = 50;
  rectangleWidth: number = 60;
  rectangleHeight: number = 60;
  droppableHeight: number = 460;
  bufferArea: number = 5;

  createFixedSquare(positionX: number, positionY: number, fillColor: string = "orange", strokeColor: string = "red" ) {
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

  createOval(positionX: number, positionY: number, fillColor: string = "orange", strokeColor: string = "red" , id: string ) {
    let canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement
    canvas.id = id;
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

  createDrppableArea(positionX: number, positionY: number, strokeColor: string = "black" , id:string ) {
    let canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement
    canvas.id = id;
    canvas.width = this.ovalRadiusY*2+5;
    canvas.height = this.droppableHeight;
    canvas.style.left = positionX + "px";
    canvas.style.top = positionY + "px";
    canvas.style.position = "absolute";

    if (canvas.getContext) {
      let context = canvas.getContext("2d");
      let width = this.ovalRadiusY*2+5;
      let height = this.droppableHeight;
      if (context != null) {
        context.beginPath();
        context.rect(0, 0, width, height);
        context.strokeStyle = "#000";
        context.stroke();
        document.body.appendChild(canvas);
      }
    }
  }
}


