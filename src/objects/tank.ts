import { Bullet } from "./Bullet";
import { XYPosition } from "./xyposition";
import { Shit } from "./shit";

export class Tank {
  private img: HTMLImageElement;
  protected shit: Shit;
  public bullet: Bullet;
  private pos: XYPosition;
  private vx = 0;
  private moving = 0;

  constructor(public ctx: CanvasRenderingContext2D) {
    this.img = new Image();
    this.img.src = `data:image/png;base64,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`;
    this.pos = {x: 700, y: 410};
    this.shit = new Shit(ctx);
  }

  shoot() {
    this.bullet = new Bullet(this.pos.x - 8, this.pos.y + 54);
    this.bullet.shoot();
  }

  move(direction: string) {
    if (direction === 'left') {
      this.moving = 1;
      this.vx = 6;
      this.shit.move(6);
    }
  }

  draw() {
    this.pos.x -= (this.moving-- > 0) && this.vx;
    this.ctx.drawImage(this.img, this.pos.x, this.pos.y);
    this.bullet && this.bullet.draw(this.ctx);
    this.shit.draw();
  }
}
