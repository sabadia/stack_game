import { Config, ObjectHandler, ConfigInterface } from "./Global";
import { Circle } from "./Circle";
import { Common } from "../common/common";

export class Stack extends Config implements ObjectHandler<Circle> {
  CircleList: Circle[] = [];
  constructor(config: ConfigInterface) {
    super(config);
    for (let i = 0; i < 3; i++) {
      this.push();
    }
  }
  push(): Circle {
    const config: ConfigInterface = {
      _parentId: this._id,
      width: "140px",
      height: "100px",
      background: this.background,
    };
    this.CircleList.push(new Circle(config));
    return this.CircleList[this.CircleList.length - 1];
  }
  pop(index: number): Circle {
    throw new Error("Method not implemented.");
  }
  init(): void {
    this.background = this.background || Common.getRandomColorCode();
    const style = {
      width: this.width,
      height: this.height,
      margin: "40px",
      paddingLeft: "5px",
      paddingRight: "5px",
      borderLeft: `10px solid ${this.background}`,
      borderRight: `10px solid ${this.background}`,
      borderBottom: `10px solid ${this.background}`,
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
    };
    Common.createHTMLElement("div", style, this._id).appendTo(
      `#${this._parentId}`
    );
  }
}
