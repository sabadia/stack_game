// import { Guid } from "guid-typescript";

import { Common } from "../common/common";

export interface ConfigInterface {
  _id?: string;
  _parentId: string;
  centerPositionX?: string;
  centerPositionY?: string;
  width?: string;
  height?: string;
  background?: string;
}
export abstract class Config {
  readonly _id: string;
  public _parentId: string;
  protected centerPositionX: string;
  protected centerPositionY: string;
  protected width: string;
  protected height: string;
  protected background: string;
  constructor(config: ConfigInterface) {
    this._id = config._id || Common.getNewGuid();
    this._parentId = config._parentId;
    this.centerPositionX = this.getValidcssUnitOrEmpty(
      config.centerPositionX || "0px"
    );
    this.centerPositionY = this.getValidcssUnitOrEmpty(
      config.centerPositionY || "0px"
    );
    this.width = this.getValidcssUnitOrEmpty(config.width || "0px");
    this.height = this.getValidcssUnitOrEmpty(config.height || "0px");
    this.background = config.background || "";
    this.init();
  }

  private getValidcssUnitOrEmpty = (value: string): string =>
    value.match(/(\d*\.?\d+)\s?(px|em|ex|%|in|cn|mm|pt|pc+)/g) ? value : "";

  abstract init(data?: any): void;
  // protected getStyleFromConfig(config: ConfigInterface) {
  //   Object.keys(config).map(key=>{})
  // }
  
}

export interface ObjectHandler<t> {
  push(): t;
  pop(index: number): t;
}
