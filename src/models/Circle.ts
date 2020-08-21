import { Position } from "./Global";

export class Circle extends Position {
  constructor(
    private color: string,
    positionX: number,
    positionY: number,
    private width?: number,
    private height?: number
  ) {
    super(positionX, positionY);
  }
}
