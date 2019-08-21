import { BaseLevel } from "./baselevel";

export class Level1 extends BaseLevel {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.nextLevel(2);
  }

  draw() {
    this.drawBackground();
    this.drawMessageLoop();

    this.tank.draw();
    this.shit.draw();

    for (const tree of this.tree) {
      tree.draw();
    }

    window.requestAnimationFrame(() => this.draw());
  }
}
