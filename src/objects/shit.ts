import { XYPosition } from "./xyposition";

export class Shit {
  private img: HTMLImageElement = new Image();
  private readonly color: string = '#a47655';
  private animationStep: number = 100;
  private turn: boolean = false;

  constructor(private ctx: CanvasRenderingContext2D, private pos: XYPosition = {x: 700, y: 314}) {
    this.img.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAlCAMAAAAQnMtIAAAACVBMVEX///+kdlUAAAB2nRBaAAAAA3RSTlP//wDXyg1BAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAiklEQVR4nNXUSRKAIAwEQGLN/78cBWQxq0fNybLaCUQRRxHFJG5AissUSgixCDJSZDNNWBpJWOfABI+CB1YMbGCmuGIQA8xO9lzux2gjTpcehHAdzQSNRv2Q+LNvu0YomkEsqkEiypvl8tdGFxeB0l2jJKZONzb9HUVmfruuWSegXmqljppQ2//lBGrYJJAMveIxAAAAAElFTkSuQmCC`;
  
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
    this.ctx.save();
    this.ctx.drawImage(
      this.img,
      this.pos.x + 44 - ((this.animationStep * this.img.width) / 100)/2,
      this.pos.y + 62 - ((this.animationStep * this.img.height) / 100), 
      ((this.animationStep * this.img.width) / 100),
      ((this.animationStep * this.img.height) / 100)
    );
    this.ctx.restore();
    this.ctx.strokeRect(this.pos.x + 10, this.pos.y + 70, 70, 10);
    this.ctx.fillRect(this.pos.x + 10, this.pos.y + 70, (70 * this.animationStep) / 100, 10);
    if (!this.turn && --this.animationStep < 0) {
      this.turn = true;
    } else if (this.turn && ++this.animationStep > 100) {
      this.turn = false;
    }
  }
}
