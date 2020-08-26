import { Config, ObjectHandler, ConfigInterface } from "./Global";
import { Circle } from "./Circle";
import { Common } from "../common/common";
import "jquery-ui-dist/jquery-ui";
export interface StackInterface extends ConfigInterface {
  circleConfigList?: ConfigInterface[];
}
export class Stack implements ObjectHandler<Circle> {
  config: Config;
  CircleList: Circle[] = [];
  constructor(config: StackInterface) {
    this.config = new Config(config);
    this.init();
  }
  push(circleConfigList: ConfigInterface[]) {
    circleConfigList.forEach((circleConfig, index, self) => {
      circleConfig._id = circleConfig._id || Common.getNewGuid();
      const newCircle = new Circle(circleConfig);
      this.CircleList.push(newCircle);
    });
    this.updateDragable();
  }
  pop(id?: string): Circle {
    // if (id && id === this.CircleList[this.CircleList.length - 1].config._id) {

    // }
    const circle = this.CircleList.splice(
      this.CircleList.indexOf(
        this.CircleList.filter((circle) => circle.config._id === id)[0]
      ),
      1
    )[0];
    console.log(id, circle);
    this.updateDragable();
    return circle;
  }
  private init(): void {
    this.config.color = this.config.color || Common.getRandomColorCode();
    const style = {
      width: this.config.width,
      height: this.config.height,
      margin: "40px",
      paddingLeft: "5px",
      paddingRight: "5px",
      borderLeft: `10px solid ${this.config.color}`,
      borderRight: `10px solid ${this.config.color}`,
      borderBottom: `10px solid ${this.config.color}`,
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
    };
    const newStack = Common.createHTMLElement(
      "div",
      style,
      this.config._id,
      "stack"
    );
    newStack.droppable({
      drop: function (event, ui) {
        ui.draggable.detach();
      },
    });
    newStack.appendTo(`#${this.config._parentId}`);
  }
  updateDragable() {
    this.CircleList.forEach((circle) => circle.disableDragable());
    if (this.CircleList.length) {
      this.CircleList[this.CircleList.length - 1].enableDragable();
    }
  }
}
