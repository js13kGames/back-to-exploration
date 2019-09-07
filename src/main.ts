import { Game } from './objects/game';

export async function main() {
  const background = <HTMLCanvasElement>document.getElementById('background');
  const ctx = background.getContext('2d');
  await drawIntro(background, ctx);
  drawBackground(background, ctx);

  const canvas = <HTMLCanvasElement>document.getElementById('game');
  const game = new Game(canvas);
  game.start(1);
}

function drawIntro(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): Promise<any> {
  const txt = ['let’s', 'discover and explore', 'the nature', 'then evolute'];
  return delayed(async() => {
    ctx.font = '48px arial';
    await delayed(() => {
      ctx.fillStyle = '#64b5f6';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000';
      ctx.fillText(txt[0], 90, 200);
    }, 1000);
    await delayed(() => {
      ctx.fillStyle = '#ebcb68';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000';
      ctx.fillText(txt[0], 90, 200);
      ctx.fillText(txt[1], 90, 260);
    }, 1000);
    await delayed(() => {
      ctx.fillStyle = '#6cb74c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000';
      ctx.fillText(txt[0], 90, 200);
      ctx.fillText(txt[1], 90, 260);
      ctx.fillText(txt[2], 90, 320);
    }, 1000);
    await delayed(() => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      ctx.fillText(txt[0], 90, 200);
      ctx.fillText(txt[1], 90, 260);
      ctx.fillText(txt[2], 90, 320);
      ctx.fillText(txt[3], 90, 380);
    }, 1000);
  }, 5000);
}

function drawBackground(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
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
  ctx.font = '12px arial';
  ctx.fillStyle = '#b9a946';
  ctx.fillText('action: [spacebar]', 14, 586);
}

function delayed(fnc: any, time: number) {
  return new Promise((res) => {
    requestAnimationFrame(fnc);
    setTimeout(() => res(), time)
  });
}

main();
