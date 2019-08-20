import { Tank } from "../objects/tank";
import { Tree } from "../objects/tree";
import { Shit } from "../objects/shit";
import { Level } from "./level";
import { Phrases } from "../objects/phrases";

export class BaseLevel implements Level {
  protected readonly textFont = '18px arial';
  protected readonly backgroundColor = '#6097fe';
  protected tank: Tank;
  protected tree: Tree[] = [];
  protected shit: Shit;
  private drawText: number = 0;
  private phrase: string;

  constructor(public ctx: CanvasRenderingContext2D) {
    this.tank = new Tank(this.ctx);
    this.shit = new Shit(this.ctx);
    for (let x = 0; x < 10; x++) {
      this.tree.push(new Tree(this.ctx, {x: 560 - (80 * x), y: 348}));
    }
  }

  control(identifier: string) {
    if (identifier === 'space') {
      if (!this.tank.bullet || !this.tank.bullet.isInCanvas(this.canvas.width, this.canvas.height)) {
        this.tank.shoot();
      }
    } else if (identifier === 'left') {
      this.tank.move('left');
    } else if (identifier === 'right') {
      this.phrase = Phrases.getRandom();
      this.drawText = 300;
    }
  }

  draw() {};
}
