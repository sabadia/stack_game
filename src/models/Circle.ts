import { Config, ConfigInterface } from "./Global";
import { Common } from "../common/common";
export class Circle extends Config {
  constructor(config: ConfigInterface) {
    super(config);
  }
  init(): void {
    const style = {
      width: this.width,
      height: this.height,
      borderRadius: '50%',
      backgroundColor: this.background,
      
    };
    Common.createHTMLElement("div", style,this._id).appendTo(`#${this._parentId}`);
  }
  
}
