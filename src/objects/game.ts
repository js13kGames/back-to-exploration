import { Level } from '../levels/Level';

export class Game {
  private curLevel: Level;

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
      case 2:
        this.curLevel.moveCamera(2)
          .then(() => {
            this.curLevel = new Level(this.canvas, 2);
          });
      break;
      case 3:
        this.curLevel.moveCamera(3)
          .then(() => {
            this.curLevel = new Level(this.canvas, 3);
          });
      break;
      case 4:
        this.curLevel.moveCamera(4)
          .then(() => {
            this.curLevel = new Level(this.canvas, 4);
          });
      break;
      case 5:
        this.curLevel.moveCamera(5)
          .then(() => {
            this.curLevel = new Level(this.canvas, 5);
          });
      break;
      case 6:
          this.curLevel.moveCamera(6)
            .then(() => {
              this.curLevel = new Level(this.canvas, 6);
            });
      break;
    }  
  }

  loop() {
    this.curLevel.draw();
    window.requestAnimationFrame(() => this.loop());
  }
}
