import { Level } from '../levels/Level';

export class Game {
  private curLevel: Level;
  private ticker: number = 5;

  constructor(private readonly canvas: HTMLCanvasElement) {
    let block = false;
    document.addEventListener('keydown', e => {
      if (block) return;
      block = true;
      if (e.code === 'Space') {
        this.curLevel.control('space');
      } else if (e.code === 'ArrowLeft') {
        this.curLevel.control('left');
      } else if (e.code === 'ArrowRight') {
        this.curLevel.control('right')
      }
    });
    document.addEventListener('keyup', () => {
      block = false;
    });
    canvas.addEventListener('levelup', (event: CustomEvent) => {
      this.start(event.detail);
    });
  }

  start(level: number) {
    switch (level) {
      case 1: 
        this.curLevel = new Level(this.canvas, 1);
        this.loop();
      break;
      default:
        this.curLevel.moveCamera(level)
          .then(() => {
            this.curLevel = new Level(this.canvas, level);
          });
      break;
    }  
  }

  loop() {
    if (this.ticker > 4) {
      this.curLevel.draw();
      this.ticker = 0;
    }
    window.requestAnimationFrame(() => this.loop());
    this.ticker++;
  }
}
