import { XYPosition } from "./xyposition";
import { Bar } from "./bar";

export class Char {
  private img: HTMLImageElement;
  public bar: Bar;
  public pos: XYPosition;
  private basePos: XYPosition;
  private vx = 0;
  private moving = 0;
  private cur = 1;
  private base64 = 'data:image/png;base64,';
  private offset = [0, 0, 2, 8, 16, 42];
  private imgs = [
    '',
    `iVBORw0KGgoAAAANSUhEUgAAAD0AAABuCAMAAACjpuuCAAAACVBMVEX///8BAQEAAAAw0TQtAAAAA3RSTlP//wDXyg1BAAAACXBIWXMAAC4jAAAuIwF4pT92AAAB1ElEQVR4nNWY23LDIAxETcf//8tOg28gVtKKgCfRS5vxHHYRWAivf4sV2/E34ccrBS8bxi16K/+HuK3txUM0tD5PO23Gw5h2OOeu9Neu2MCsxWlXfOZe88Qd7WQvOp81ZD2Qc4B7tF1fQuvd4A4tciZxsqYq8eg7Jqyb9PB3rBYPz7vCv7Uy4Sit/5bz0vo87cEn0VEkb+sG3UinBtdp6FuU6ElZ81Nm0DZ8TjzqvJ64QlO+55zAOyVrf57tPuIxcUhjmNYmYUhvGlxYV2ky35guJx3uPHzlYkgla4kbqvcd2xcc04R0xnu07+32ZH9eHaD/Pxr6fk7smq6cn6U1WlPFKH1dz7ndOmtqxkHWyDBqCx1zaG3aHf2aWiQYWq+PxFliFFdfW9bREG2WdeskKsfA4p62faK4d8E4DWxe1gP9uXcSTuywS+k761O7XLy2SDygDXZMl3Ory/2od7hDrnZrfXTOL4GP+jUQjfXB3Z6ZcSmuapvSnd29c6txPjuLGLrerjR1L2G16ybKk5Z00csH9uh5LznaRlKs0W6D9f2m/W+uKK4OW+K8dHYeUa8L67qrkbzyfhfyhnG1riX00EaXesWO5pOH6/Wmst31fS1leTH+Czwje7NM5a2hAAAAAElFTkSuQmCC`,
    `iVBORw0KGgoAAAANSUhEUgAAADoAAABrCAMAAAARt2FIAAAACVBMVEX///8BAQEAAAAw0TQtAAAAA3RSTlP//wDXyg1BAAAACXBIWXMAAC4jAAAuIwF4pT92AAABz0lEQVR4nOWYyXLDIBBERYr//2WlJFuI2bu1VA6Zg60yPDU0w+b+s9hY98/mlMzRV1NlHd853APJz2PKdl1hjWoCquI9maxGcdFCNUcboWNVcyNTdAqmCRKlGn/HpmX2ifJsVz19YthbDZZByBaq2ZD3XWiqsT1h867sa8y6KNZhFxVkKAsMTsRuqPQJZj1VcGihbPJlHRTNpx2tOuuXPpj+hCyq6rA9KSvig85JC09Y2CbbqkcdhpeYPupXPplyosGaTQ8EeRj00mK6NcgDW/C6A918JTfp92dOhl44UTjZdHVZc1IqW4dzslTNkj4okqqp6I30D1VhYx9V3YNaFieUPaP+bfp/I5ruFUp29sll7Y5qFPmes+0BMAmrXt/VXz2G8NeGJ1T/LVrZHaPlMhWirZRN768ny5xMm2aLSZeGgQtUdFfBXPqLLlcNTl4WoeP9Lbzg1TaFuoDD0qpTFhmcQFefYNxa4lYxZLGUcE8L/HwdsvASfsoeLKxqXSC2Kz0Dib7qGcj8B6P6Szk8s0vjBkfkBjmuM8umxMQaFN8nr28c1iZUtNGq6wG+88dneqpuGq0lp+aSdzpZqePgqMVO9eXIFrWs2RRyTZI//gLlgX+kcjEpxwAAAABJRU5ErkJggg== `,
    `iVBORw0KGgoAAAANSUhEUgAAADcAAABlCAMAAADeQ4uIAAAACVBMVEX///8BAQEAAAAw0TQtAAAAA3RSTlP//wDXyg1BAAAACXBIWXMAAC4jAAAuIwF4pT92AAABxElEQVR4nNWY27KDIAxFpcP//zKnxQIh1x2rD4eHXmZYrAARo/V1kNb6ZzniVgX1+Y5JwjW7l8dRrIXCyaVs+/wywsEldZYvFFrcVV8kvN0XCO/3+Wnq+pxQ/ThtMJifCQ6uGIlmgdPXwSIT1QBXnMUQ6yCwfyqI7LsGCk5bHwV8IM9cIegTIBonB+H5MZBz9rm2g4n13EDOWfnNwWf3D+BkoOviIoFiPjnYw/MTwtx1u35KzttBz4fdQZH8/ETHo2BcJJsT3DiPYsJ69i8upZ9LDYhP4VDkDHSoa9o0fGzUPijAkXWy7649um1F130MCo9wSj66h8xpqHyhnEaHq9rw2lEh4gziku0daSt1RoAE+o2kHU273hH7lwOFc0Yle56NUKO6R1cWVvf0Fo0w9j02+nVIKkPvO+evnZ/Xff+Xu1p/Qj4wT2+fX3CB2M9/a4QUt4Tq8xVQL3X31Xo39FEJ/fdQnUxa8XLA9W1rFNXXtLOtjOZHRnHrchSM15PE6tfJImOKAkL7p4BgXS7edaH5wpVwnk0w5+MtzY160O7h3u+frOdp0/cPr5t+fx8ZnLT+cwdp22q6z39InRX79v6NDfwHzGOFisPcw5oAAAAASUVORK5CYII=`,
    `iVBORw0KGgoAAAANSUhEUgAAADAAAABcCAMAAAAf6saUAAAACVBMVEX///8BAQEAAAAw0TQtAAAAA3RSTlP//wDXyg1BAAAACXBIWXMAAC4jAAAuIwF4pT92AAABV0lEQVR4nOWYS67DMAhFQ8X+t5zm4ygYLmArRB3Ug7Yv4ugY418ef5bW1v2DlqyxDN++UoK7+AGCu/ABglV82tjEJwq2j2ICAJsyQBAQIhg4EsMM+2OEc/EMbsc4LAKQRAZIJIAlMsAQTNlMUgQvdA8GZnuCZYEIIx2R5qCbAnBGUvHU4DSheGxwynIrnueQKawhmSvDXboUAIgV40k3BQJCxcSwngoIRIqZwh2KqUrvBASKkj4VLy0gocAHSp3hLwFYuKI13QR1OcA1FK0HN5FXh9XfBIoM3kaWnNvjBn8zDuNLzge3yHNdGgKQ69dLlOxrQmIQhDs1RENX3exQFL+DM86h54+sIYOuXrHh6HWvSAo3a2iYVMSzFTx7Z7bKPtXcNSLFyyuu6nJydZj0Awcwe0syl/T7eP+Xvv6E0cYw9L+BG4jD6QyQw2o30pVIMUtUOOcl/wsJnVlt3tZrrQAAAABJRU5ErkJggg==`,
    `iVBORw0KGgoAAAANSUhEUgAAAEUAAABCCAMAAAA2VuujAAAACVBMVEX///8BAQEAAAAw0TQtAAAAA3RSTlP//wDXyg1BAAAACXBIWXMAAC4jAAAuIwF4pT92AAABZ0lEQVR4nN2X2xKCMAxEWyf//8uoVGgTc9mkD87YB1FsD5sNCYUebYzj/OytNGhlvI8lDjHI+2sFQ5xRlEPKuTyHpJQSR9MyOBmQRcmBHErDI/MpKIc0cwUnBkVaMEEUSYE4kJaQA1PcCktQHDkZis2h/rG3hykfHBVDYzleM6ocauk2qcjJ+WKNCuU7qJoWGVQxIoGp+sIxv3P3HEzMj7X8IWW116d0rCsvFHVBN8433gmCZ2Ofsz1ZuC9edGV3gzpCHQ20QBijM8RLGf3wc2S3cnEd/K5zx4LZqaOJ0Shwlm6MpOSecBcmqEYQs9tfBkZQsIC+jFO1hPYu25Tz9ktExNjLj1dQGzW9yCHxV4Yz5ehafGP6fbymbWX6vpZLAQMM3A3eRO/dqUVBCnJCNnYe1/XaBoVBTMoIaTUGf6otPVn0ajZrTlIpRm4VGbk9ppZsZwfvqWDvK9pEMEfR26e98ACWf8YTlq1XEQpIHCAAAAAASUVORK5CYII=`
  ];

  constructor(public ctx: CanvasRenderingContext2D) {
    this.img = new Image();
    this.img.src = this.base64 + this.imgs[1];
    this.pos = {x: 620, y: 390};
    this.basePos = Object.assign({}, this.pos);
    this.bar = new Bar(ctx);
  }

  setLevel(level: number) {
    this.img.src = this.base64 + this.imgs[level];
    this.pos.y = this.basePos.y + this.offset[level];
    this.bar.setLevel(level);
  }

  move(direction: string) {
    if (direction === 'left') {
      this.moving = 1;
      this.vx = 6;
      this.bar.move(6);
    }
    this.cur = this.cur < 5 ? this.cur+1 : 1;
    this.img.src = this.base64 + this.imgs[this.cur];
    this.pos.y = this.basePos.y + this.offset[this.cur];
  }

  draw() {
    this.pos.x -= (this.moving-- > 0) && this.vx;
    this.ctx.drawImage(this.img, this.pos.x, this.pos.y);
    this.bar.draw();
  }
}
