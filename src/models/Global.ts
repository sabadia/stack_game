export class Position {
  constructor(private positionX: number, private positionY: number) {}
}

export interface ObjectHandler<t> {
  push(object: t): void;
  pop(index: number): t;
}
