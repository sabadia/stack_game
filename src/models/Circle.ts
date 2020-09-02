import { Config, ConfigInterface } from "./Global";
import { Common } from "../common/common";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
export class Circle {
  config: Config;
  constructor(config: ConfigInterface) {
    this.config = new Config(config);
    this.init();
  }
  private init(): void {
    const style = {
      width: this.config.width,
      height: this.config.height,
      borderRadius: "50%",
      backgroundColor: this.config.color,
    };
    const newCircle = Common.createHTMLElement(
      "div",
      style,
      this.config._id,
      "circle"
    );
    newCircle.draggable({
      cursor: "move",
      revert: "invalid",
      disabled: true,
    });
    newCircle.appendTo(`#${this.config._parentId}`);
  }
  enableDragable() {
    $(`#${this.config._id}`).draggable({
      disabled: false,
    });
  }
  disableDragable() {
    $(`#${this.config._id}`).draggable({
      disabled: true,
    });
  }
}
