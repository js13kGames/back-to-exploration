// import { Game } from './objects/game';

import BackgroundWorker from './background.worker.js';
import CharWorker from './char.worker.js';

function main() {
  const background = document.getElementById('background').transferControlToOffscreen();
  const backgroundWorker = new BackgroundWorker();
  backgroundWorker.postMessage({canvas: background}, [background]);

  const char = document.getElementById('char').transferControlToOffscreen();
  const charWorker = new CharWorker();
  charWorker.postMessage({canvas: char}, [char]);

  // const canvas = document.getElementById('game');
  // const game = new Game(canvas);
  // game.start(1);
}

main();
