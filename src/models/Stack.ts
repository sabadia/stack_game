import { Position, ObjectHandler } from "./Global";
import { Circle } from "./Circle";

export class Stack extends Position implements ObjectHandler<Circle> {
  constructor(
    private color: string,
    positionX: number,
    positionY: number,
    private width?: number,
    private height?: number,
    private circleList: Circle[] = []
  ) {
    super(positionX, positionY);
  }
    push(object: Circle): void {
        throw new Error("Method not implemented.");
    }
    pop(index: number): Circle {
        throw new Error("Method not implemented.");
    }
}
