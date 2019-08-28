import { BaseLevel } from "./baselevel";
import { Target } from "../objects/target";

export class Level1 extends BaseLevel {
  constructor(canvas: HTMLCanvasElement, level: number) {
    super(canvas);
    console.log(level);
    for (let x = 0; x < 1; x++) {
      this.target.push(new Target(this.ctx, {x: 260 - (80 * x), y: 348}));
    }
  }

  draw() {
    this.drawBackground('#6097fe');
    this.drawMessageLoop();

    this.char.draw();

    for (const target of this.target) {
      target.draw();
    }
  }
}
