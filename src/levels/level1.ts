import { BaseLevel } from "./baselevel";
import { Tree } from "../objects/tree";

export class Level1 extends BaseLevel {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    for (let x = 0; x < 3; x++) {
      this.tree.push(new Tree(this.ctx, {x: 260 - (80 * x), y: 348}));
    }
  }

  draw() {
    this.drawBackground('#6097fe');
    this.drawMessageLoop();

    this.tank.draw();

    for (const tree of this.tree) {
      tree.draw();
    }
  }
}
