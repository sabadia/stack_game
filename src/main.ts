import * as _ from "lodash";
import $ from "jquery";
import { Board, BoardInterface } from "./models/board";
import { Common } from "./common/common";

const startNewGame = () => {
  init();
};

function init() {
  $(document).ready(function () {
    const mainContainer = Common.createHTMLElement("div", { height: "100%" });
    $("body").append(mainContainer);

    const gameBoardConfig: BoardInterface = {
      _parentId: mainContainer.attr("id"),
      height: "100%",
      width: "100%",
      stacksConfigList: [
        {
          width: "140px",
          height: "600px",
          // color: "red",
        },
        {
          width: "140px",
          height: "600px",
          // color: "green",
        },
        {
          width: "140px",
          height: "600px",
          // color: "blue",
        },
      ],
    };
    const style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      width: "100%",
      height: "100%",
    };
    Common.createHTMLElement(
      "button",
      style,
      "",
      "new-game",
      "New Game"
    ).appendTo(`#${mainContainer.attr("id")}`);
    $(".new-game").click(() => new Board(gameBoardConfig));
  });
}

startNewGame();
