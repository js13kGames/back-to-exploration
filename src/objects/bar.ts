import { XYPosition } from "./xyposition";

export class Bar {
  private readonly color: string = '#a47655';
  private animationStep: number = 100;
  private turn: boolean = false;

  constructor(private ctx: CanvasRenderingContext2D, private pos: XYPosition = {x: 678, y: 314}) {
  }

  move(amount: number) {
    this.pos.x -= amount;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
    // this.ctx.save();
    // this.ctx.restore();
    this.ctx.strokeRect(this.pos.x + 10, this.pos.y + 70, 70, 10);
    this.ctx.fillRect(this.pos.x + 10, this.pos.y + 70, (70 * this.animationStep) / 100, 10);
    if (!this.turn && (this.animationStep -= 3) < 0) {
      this.turn = true;
    } else if (this.turn && (this.animationStep += 3) > 100) {
      this.turn = false;
    }
  }
}
