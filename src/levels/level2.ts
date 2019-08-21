import { BaseLevel } from "./baselevel";

export class Level2 extends BaseLevel {
  draw() {
    this.drawBackground('gray');
    this.drawMessageLoop();
    
  }
}
