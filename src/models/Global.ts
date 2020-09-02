import { Common } from "../common/common";

export interface ConfigInterface {
  _id?: string;
  _parentId?: string;
  width?: string;
  height?: string;
  color?: string;
}
export class Config {
  readonly _id: string;
  public _parentId: string;
  public width: string;
  public height: string;
  public color: string;
  constructor(config: ConfigInterface) {
    this._id = config._id || Common.getNewGuid();
    this._parentId = config._parentId;
    this.width = this.getValidcssUnitOrEmpty(config.width || "0px");
    this.height = this.getValidcssUnitOrEmpty(config.height || "0px");
    this.color = config.color || "";
  }

  private getValidcssUnitOrEmpty = (value: string): string =>
    value.match(/(\d*\.?\d+)\s?(px|em|ex|%|in|cn|mm|pt|pc+)/g) ? value : "";
}

export interface ObjectHandler<t> {
  push(data?: ConfigInterface[]): void;
  pop(id?:string): t;
}
