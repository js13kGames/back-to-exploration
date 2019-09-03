import { Target } from "../objects/target";
import { Char } from "../objects/char";
import { Phrases } from "../objects/phrases";

export class Level {
  protected readonly ctx: CanvasRenderingContext2D;
  protected readonly textFont = '18px arial';
  protected char: Char;
  protected target: Target;
  private drawText: number = 0;
  private phrase: string;

  private interval: number;
  constructor(public canvas: HTMLCanvasElement, public level: number) {
    this.ctx = canvas.getContext('2d');
    this.char = new Char(this.ctx);
    console.log(level);
    this.target = new Target(this.ctx, {x: 190, y: 368});
    this.target.setLevel(level);
    this.char.setLevel(level);
  }

  control(identifier: string) {
    if (identifier === 'space') {
      //this.target.setLevel(5);
      this.action();
    } else if (identifier === 'left') {
      this.char.move('left');
    } else if (identifier === 'right') {
      this.phrase = Phrases.getRandom();
      this.drawText = 300;
    }
  }

  action() {
    if (!this.interval) {
      this.char.bar.stop();
      this.interval = window.setInterval(() => {
        this.char.move('left');
        if (this.char.pos.x < this.target.pos.x + 110) {
          clearInterval(this.interval);
          this.target.pos.x -= 360;
          this.nextLevel(this.level+1);
        }
      }, 100);
    }
  }

  draw() {
    this.ctx.save();
    this.drawBackground('#64b5f6');
    this.drawMessageLoop();

    this.char.draw();
    this.target.draw();
    this.ctx.restore();
  }

  drawMessageLoop() {
    if (this.phrase) {
      if (--this.drawText > 0) {
        this.ctx.fillStyle = '#000000';
      } else {
        this.ctx.fillStyle = '#64b5f6';
      }
      this.ctx.font = this.textFont;
      this.ctx.fillText('Don\'t regret!', 90, 178);
      this.phrase.split('\n').forEach((text, index) => {
        this.ctx.fillText(text, 90, 200 + (index * 22));
      });
    }
  }

  protected drawBackground(fillStyle: string) {
    this.ctx.fillStyle = fillStyle;
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
    this.ctx.fillStyle = '#ebcb68';
    this.ctx.fillRect(0, 440, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#e9d8af';
    this.ctx.fillRect(0, 450, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#c9b08e';
    this.ctx.fillRect(0, 480, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#e9d8af';
    this.ctx.fillRect(0, 510, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#ebcb68';
    this.ctx.fillRect(0, 550, this.canvas.width, this.canvas.height);
  }

  public moveCamera(level: number) {
    return new Promise((res) => {
       var camMove = setInterval(() => {
        this.char.pos.x+=2;
        this.char.bar.pos.x+=2;
        this.target.setLevel(level);
        this.target.pos.x+=2;
        if (this.char.pos.x > 660) {
          clearInterval(camMove);
          res();
        }
      }, 10);
    });
  }

  protected nextLevel(level: number) {
    this.canvas.dispatchEvent(new CustomEvent('levelup', {detail: level}));
  }
}
