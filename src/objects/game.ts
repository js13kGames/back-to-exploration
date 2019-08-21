import { Level } from '../levels/level';
import { Level1 } from '../levels/level1';
import { Level2 } from '../levels/level2';
import { Level3 } from '../levels/level3';

export class Game {
  private curLevel: Level;

  constructor(private readonly canvas: HTMLCanvasElement) {
    document.addEventListener('keydown', e => {
      if (e.code === 'Space') {
        this.curLevel.control('space');
      } else if (e.code === 'ArrowLeft') {
        this.curLevel.control('left');
      } else if (e.code === 'ArrowRight') {
        this.curLevel.control('right')
      }
    });
    canvas.addEventListener('levelup', (event: CustomEvent) => {
      this.start(event.detail);
    });
  }

  start(level: number) {
    switch (level) {
      case 1: 
        this.curLevel = new Level1(this.canvas);
      break;
      case 2: 
        this.curLevel = new Level2(this.canvas);
      break;
      case 3: 
        this.curLevel = new Level3(this.canvas);
      break;
    }
    this.curLevel.draw();
  }
}
