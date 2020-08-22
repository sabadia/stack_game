import { Config, ObjectHandler, ConfigInterface } from "./Global";
import { Stack } from "./Stack";
import $ from "jquery";
import { Common } from "../common/common";

export interface BoardInterface extends ConfigInterface {
  NumberOfStack: number;
}
export class Board extends Config implements ObjectHandler<Stack> {
  stackList: Stack[] = [];
  private Style: any;
  constructor(config: BoardInterface) {
    super(config);
    for (let i = 0; i < config.NumberOfStack; i++) {
      this.push();
    }
  }
  push(): Stack {
    const config: ConfigInterface = {
      _parentId: this._id,
      width: "140px",
      height: "600px",
    };
    this.stackList.push(new Stack(config));
    return this.stackList[this.stackList.length - 1];
  }
  pop(index?: number): Stack {
    throw new Error("Method not implemented.");
  }
  init(): void {
    const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: this.background,
      width: this.width,
      height: this.height,
    };
    Common.createHTMLElement("div", style, this._id).appendTo(
      `#${this._parentId}`
    );
  }
}
