import { Position, ObjectHandler } from "./Global";
import { Stack } from "./Stack";

export class Board extends Position implements ObjectHandler<Stack> {
  constructor(
    positionX: number,
    positionY: number,
    private width?: number,
    private height?: number,
    private stackList: Stack[] = []
  ) {
    super(positionX, positionY);
  }
    push(object: Stack): void {
        throw new Error("Method not implemented.");
    }
    pop(index: number): Stack {
        throw new Error("Method not implemented.");
    }
}
