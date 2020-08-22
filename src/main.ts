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
      NumberOfStack: 3,
    };
    new Board(gameBoardConfig);
  });
}

startNewGame();
