import { Tank } from "../objects/tank";
import { Tree } from "../objects/tree";
import { Shit } from "../objects/shit";
import { Level } from "./level";
import { Phrases } from "../objects/phrases";

export class BaseLevel implements Level {
  protected readonly ctx: CanvasRenderingContext2D;
  protected readonly textFont = '18px arial';
  protected readonly backgroundColor = '#6097fe';
  protected tank: Tank;
  protected tree: Tree[] = [];
  protected shit: Shit;
  private drawText: number = 0;
  private phrase: string;

  constructor(public canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d');
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

  draw() { }

  drawMessageLoop() {
    if (--this.drawText > 0) {
      this.ctx.fillStyle = '#000000';
    } else {
      this.ctx.fillStyle = '#6097fe';
    }

    this.ctx.font = this.textFont;
    if (this.phrase) {
      this.phrase.split('\n').forEach((text, index) => {
        this.ctx.fillText(text, 100, 200 + (index * 22));
      });
    }
  }

  protected drawBackground() {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
  }

  protected nextLevel(level: number) {
    this.canvas.dispatchEvent(new CustomEvent('levelup', {detail: level}));
  }
}
