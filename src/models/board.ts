import { Config, ObjectHandler, ConfigInterface } from "./Global";
import { Stack } from "./Stack";
import $ from "jquery";
import { Common } from "../common/common";
import { Circle } from "./Circle";

export interface BoardInterface extends ConfigInterface {
  stacksConfigList: ConfigInterface[];
}
export class Board implements ObjectHandler<Stack> {
  private config: Config;
  private stacksConfigList: ConfigInterface[];
  stackList: Stack[] = [];
  private circleList: Circle[] = [];
  constructor(config: BoardInterface) {
    this.config = new Config(config);
    this.stacksConfigList = config.stacksConfigList;
    this.init();
  }
  push(configList?: ConfigInterface[]) {
    configList = configList || [
      {
        _parentId: this.config._id,
        width: "140px",
        height: "600px",
      },
    ];
    configList.forEach((config) => {
      config._parentId = this.config._id;
      const newStack = new Stack(config);
      this.stackList.push(newStack);
    });
    this.initCirclesToStackList();
  }
  pop(): Stack {
    throw new Error("Method not implemented.");
  }
  private init(): void {
    $(`#${this.config._parentId}`).empty();
    this.circleList = [];
    this.stackList = [];
    const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: this.config.color,
      width: this.config.width,
      height: this.config.height,
    };
    Common.createHTMLElement("div", style, this.config._id, "board").appendTo(
      `#${this.config._parentId}`
    );
    this.push(this.stacksConfigList);
    this.initOnCircleDropListener();
  }

  private initCirclesToStackList() {
    const stackColorList = this.stackList.map((stack) => stack.config.color);
    let circleColorList: string[] = [];
    stackColorList.forEach((stackColor) => {
      circleColorList = circleColorList.concat(
        stackColorList.map((_) => stackColor)
      );
    });

    const circleRandomColorList = this.shuffle([...circleColorList]);
    this.stackList.forEach((stack) => {
      stack.push(
        this.stackList.map(() => {
          return {
            _parentId: stack.config._id,
            width: "140px",
            height: "100px",
            color: circleRandomColorList.pop(),
          };
        })
      );
    });
    this.initCircleListWithDragStopListener();
  }
  initCircleListWithDragStopListener() {
    this.circleList = [];
    this.stackList.forEach(
      (stack) => (this.circleList = this.circleList.concat(stack.CircleList))
    );
    this.initOnCircleDragStopListener();
  }
  private shuffle(array: string[]): string[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  getStackById(id: string) {
    return this.stackList.filter((stack) => stack.config._id === id)[0];
  }
  getCircleById(id: string) {
    return this.circleList.filter((circle) => circle.config._id === id)[0];
  }
  initOnCircleDragStopListener() {
    this.circleList.forEach((circle) => {
      let revert: boolean = true;
      $(`#${circle.config._id}`).draggable({
        revert: (data: boolean) => {
          if (data === false) {
            revert = data;
            return "invalid";
          } else {
            revert = true;
            return revert;
          }
        },
        stop: (event, ui) => {
          if (revert) {
            const stack = this.getStackById(circle.config._parentId);
            stack.pop(circle.config._id);
            if (this.checkisSolved()) {
              this.sucessPageInit();
            }
          } else {
          }
        },
      });
    });
  }
  initOnCircleDropListener() {
    this.stackList.forEach((stack) => {
      $(`#${stack.config._id}`).on("drop", (event, ui) => {
        const circle = this.getCircleById(ui.draggable.attr("id"));
        ui.draggable.remove();
        stack.push([
          {
            _parentId: stack.config._id,
            color: circle.config.color,
            height: circle.config.height,
            width: circle.config.width,
          },
        ]);
        this.initCircleListWithDragStopListener();
      });
    });
  }
  checkisSolved() {
    for (let i = 0; i < this.stackList.length; i++) {
      if (!this.stackList[i].checkIsSolved(this.stackList.length)) {
        return false;
      }
    }
    return true;
  }
  sucessPageInit() {
    $(`#${this.config._parentId}`).empty();
    const style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: this.config.color,
      width: this.config.width,
      height: this.config.height,
    };
    const board = Common.createHTMLElement(
      "div",
      style,
      this.config._id,
      "board"
    );
    board.appendTo(`#${this.config._parentId}`);
    Common.createHTMLElement(
      "h1",
      "",
      "",
      "success-message",
      "Success"
    ).appendTo(`#${this.config._id}`);
    Common.createHTMLElement("button", "", "", "new-game", "New Game").appendTo(
      `#${this.config._id}`
    );
    $(".new-game").click(() => this.init());
  }
}
