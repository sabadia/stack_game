import $ from "jquery";

export class Common {
  public static getNewGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  public static createHTMLElement(
    tag: string,
    style?: any,
    id?: string,
    innerHtml: string = ""
  ) {
    const element = $(
      `<${tag} id='${id || Common.getNewGuid()}'>${innerHtml}</${tag}>`
    );
    if (style) {
      element.css(style);
    }
    return element;
  }

  public static getRandomColorCode() {
    return (
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  }
}
