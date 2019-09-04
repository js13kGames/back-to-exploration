import { XYPosition } from "./xyposition";

export class Bar {
  private color: string = '#a47655';
  private animationStep: number = 0;
  private turn: number = 1;
  public level: number = 1;

  constructor(private ctx: CanvasRenderingContext2D, public pos: XYPosition = {x: 650, y: 284}) {
  }

  move(amount: number) {
    this.pos.x -= amount;
  }

  draw() {
    this.color = (this.animationStep < 21) && '#1aca28' ||
      (this.animationStep < 41) && '#f05527' ||
      (this.animationStep < 61) && '#e3e3e3' ||
      (this.animationStep < 81) && '#9d9d9d' ||
      '#f6c43e';
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
    this.ctx.strokeRect(this.pos.x + 10, this.pos.y + 80, 80, 14);
    this.ctx.fillRect(this.pos.x + 10, this.pos.y + 80, (80 * this.animationStep) / 100, 14);
    if (this.turn == 1 && (this.animationStep -= this.level) < 1) {
      this.turn = 2;
    } else if (this.turn == 2 && (this.animationStep += this.level) > 99) {
      this.turn = 1;
    }
  }

  setLevel(level: number) {
    this.level = level;
  }

  getStep() {
    return (this.animationStep < 21 && this.level == 1) ||
      (this.animationStep > 20 && this.animationStep < 41 && this.level == 2) ||
      (this.animationStep > 40 && this.animationStep < 61 && this.level == 3) ||
      (this.animationStep > 60 && this.animationStep < 81 && this.level == 4) ||
      (this.animationStep > 80 && this.level == 5);
  }

  start() {
    this.turn = 1;
  }

  stop() {
    this.turn = 0;
  }
}
