import { Level } from '../levels/level';
import { Level1 } from '../levels/level1';

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
        this.curLevel = new Level1(this.canvas, 1);
      break;
      case 2:
        this.curLevel = new Level1(this.canvas, 2);
      break;
      case 3: 
        this.curLevel = new Level1(this.canvas, 3);
      break;
    }
    this.loop();    
  }

  loop() {
    this.curLevel.draw();
    setTimeout(() => {
      window.requestAnimationFrame(() => this.loop());
    }, 20);
  }
}
