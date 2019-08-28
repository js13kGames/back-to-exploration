import { Char } from "../objects/char";
import { Target } from "../objects/target";
import { Level } from "./level";
import { Phrases } from "../objects/phrases";

export class BaseLevel implements Level {
  protected readonly ctx: CanvasRenderingContext2D;
  protected readonly textFont = '18px arial';
  protected char: Char;
  protected target: Target[] = [];
  private drawText: number = 0;
  private phrase: string;

  constructor(public canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d');
    this.char = new Char(this.ctx);
  }

  control(identifier: string) {
    if (identifier === 'space') {
    } else if (identifier === 'left') {
      this.char.move('left');
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

  protected drawBackground(fillStyle: string) {
    this.ctx.fillStyle = fillStyle;
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
  }

  protected nextLevel(level: number) {
    this.canvas.dispatchEvent(new CustomEvent('levelup', {detail: level}));
  }
}
