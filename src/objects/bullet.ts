export class Bullet {
  public readonly color: string;
  private flying = false;
  public vx = 0;
  public vy = 0;

  constructor(public x: number, public y: number, public readonly radius = 5) {
    this.color = '#a47655';
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.flying) {
      this.x -= this.vx;
      this.x = (this.x > 0 && this.x) || 800;
    }
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }

  shoot() {
    if (!this.flying) {
      this.flying = true;
      this.vx = 6 * 2 - 6;
    }
  }

  isInCanvas(canvasWidth: number, canvasHeight: number) {
    return !(
      this.x < -this.radius ||
      this.y < -this.radius ||
      this.x > canvasWidth + this.radius ||
      this.y > canvasHeight + this.radius
    );
  }
}
