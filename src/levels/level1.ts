import { BaseLevel } from "./baselevel";
import { Target } from "../objects/target";

export class Level1 extends BaseLevel {
  constructor(canvas: HTMLCanvasElement, level: number) {
    super(canvas);
    console.log(level);
    for (let x = 0; x < 1; x++) {
      this.target = new Target(this.ctx, {x: 190, y: 368});
    }
  }

  draw() {
    this.drawBackground('#6097fe');
    this.drawMessageLoop();

    this.char.draw();
    this.target.draw();
  }
}
