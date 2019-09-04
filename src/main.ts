import { Game } from './objects/game';

function main() {
  const background = <HTMLCanvasElement>document.getElementById('background');
  drawBackground(background);

  const canvas = <HTMLCanvasElement>document.getElementById('game');
  const game = new Game(canvas);
  game.start(1);
}


function drawBackground(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#64b5f6';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ebcb68';
  ctx.fillRect(0, 440, canvas.width, canvas.height);
  ctx.fillStyle = '#e9d8af';
  ctx.fillRect(0, 450, canvas.width, canvas.height);
  ctx.fillStyle = '#c9b08e';
  ctx.fillRect(0, 480, canvas.width, canvas.height);
  ctx.fillStyle = '#e9d8af';
  ctx.fillRect(0, 510, canvas.width, canvas.height);
  ctx.fillStyle = '#ebcb68';
  ctx.fillRect(0, 550, canvas.width, canvas.height);
}
main();
