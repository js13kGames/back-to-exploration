import { Game } from './objects/game';

function main() {
  const canvas = <HTMLCanvasElement>document.getElementById('game');
  const game = new Game(canvas);
  game.start(1);
}

main();
