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
      this.drawText = 200;
    }
  }

  action() {
    if (this.char.bar.turn !== 0) {
      this.char.bar.stop();
      if (this.char.bar.getStep()) {
        this.interval = setInterval(() => {
          this.char.move('left');
          if (this.char.pos.x < this.target.pos.x + 110) {
            clearInterval(this.interval);
            this.target.pos.x -= 360;
            this.nextLevel(this.level+1);
          }
        }, 90);
      } else {
        this.phrase = Phrases.getRandom();
        this.drawText = 200;
        this.target.stop();
      }
    }
  }

  draw() {
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
        if (this.drawText === 0) {
          this.char.bar.start();
          this.target.start();
        }
      }
      this.ctx.font = this.textFont;
      this.ctx.fillText('Don\'t regret!', 90, 178);
      this.phrase.split('\n').forEach((text, index) => {
        this.ctx.fillText(text, 90, 200 + (index * 22));
      });
    }
  }

  public moveCamera(level: number) {
    return new Promise((res: any) => {
      var camMove = setInterval(() => {
        if (level === 6) {
          requestAnimationFrame(() => {
            this.ctx.font = this.textFont;
            this.ctx.fillText('We’ll do whatever just to stay alive.', 90, 200);
            setTimeout(() => {
              requestAnimationFrame(() => {
                const background = <HTMLCanvasElement>document.getElementById('background');
                background.setAttribute('style', 'position: absolute; top: 0; left: 0;z-index: 9;');
                const ctx = background.getContext('2d');
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, 800, 600);
              })
            }, 2000);
          });
        } else {
          this.char.pos.x+=2;
          this.char.bar.pos.x+=2;
          this.target.setLevel(level);
          this.target.pos.x+=2;
        }
        if (this.char.pos.x > 610) {
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
