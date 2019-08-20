import { Level } from '../levels/level';
import { Level1 } from '../levels/level1';
import { Level2 } from '../levels/level2';
import { Level3 } from '../levels/level3';

export class Game {
  private readonly ctx: CanvasRenderingContext2D;

  private currentLevelNumber: number = 1;
  private curLevel: Level;

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d');
    switch (this.currentLevelNumber) {
      case 1: 
        this.curLevel = new Level1(this.ctx);
      break;
      case 2: 
        this.curLevel = new Level2(this.ctx);
      break;
      case 3: 
        this.curLevel = new Level3(this.ctx);
      break;
    }
    this.curLevel.draw();

    document.addEventListener('keydown', e => {
      if (e.code === 'Space') {
        this.curLevel.control('space');
      } else if (e.code === 'ArrowLeft') {
        this.curLevel.control('left');
      } else if (e.code === 'ArrowRight') {
        this.curLevel.control('left')
      }
    });
  }

  draw() {
    this.drawBackground();
    this.animate();
  }

  private drawBackground() {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
  }

  private animate() {
    this.drawBackground();

    if (--this.drawText > 0) {
      this.ctx.fillStyle = '#000000';
    } else {
      this.ctx.fillStyle = '#6097fe';
    }

    this.ctx.font = this.textFont;
    if (this.phrase) {
      this.phrase.split('\n').forEach((text, index) => {
        this.ctx.fillText(text, 100, 200 + (index * 22));
      });
    }
    this.tank.draw();
    this.shit.draw();

    for (const tree of this.tree) {
      tree.draw();
    }

    window.requestAnimationFrame(() => this.animate());
  }
}
