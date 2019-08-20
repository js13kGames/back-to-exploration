import { XYPosition } from './xyposition';

export class Tree {
  public state: string = 'live';
  private img: HTMLImageElement = new Image();
  
  constructor(private ctx: CanvasRenderingContext2D, private pos: XYPosition) {
    this.img.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAChCAMAAAAht2uJAAAAqFBMVEX////7y42J8pCOz5B0/YJ69YbRrmxp8HNa+GdV/GRK7VQ66Ec36EU55EQ25UMdySkayigZyicatiIcqhwHrw4CrQoArAkBqgkCogcBlQIAjgABjQAFhQSlfEGjeTyicTOicTKZeDWcdDKIZyWEWxuCVBWDUxSAUhR5ShMDcgIDcQIFUgRlNgBiNQFVKQRJIwJKHQFIGQBGFwArAAAqAAATBwIAAAAAAADqZSgXAAAAOHRSTlP/////////////////////////////////////////////////////////////////////////ADtcEcoAAAAJcEhZcwAALiMAAC4jAXilP3YAAAXkSURBVHic7VtLb9w2EGZ3tS9vE7tNmnb7AtJDbfTmIkD//72Ib0E2QNFeGidN7dhNvU/JiYYPkRQpkUNx1xLgD9CSIkV+4gyHHFLc5DeCxwsezvLr/Bd8+SSAszHuSXWAElcQ+ZU8h+CUnJGxlkswqg1t6elZ/nMuOVFoqXi1hjyvyn/yL799DD9zkXkcSEom+bUkZLwiD+D2Q36dGQ9d5Ncjd13epAJjLWiCtun0L/hZsDjYy4O6Oj7y+GNabrTmt0K5x0YBB97bk/uEZPLus5Q8cVflTxofrST9kgWvrZlgI9c8PiJDCP6gciefs8Rv8+sVROaaWmtIF5KTYiuj/br3PNCftaAt4sUP4BFIDVxWDUNXmawjI28g0AX/+v8Q0kseViixL001Lar6YHkQPTjEh4003fWbWOtPwexATUu4y6e2qZJJ3Rayob+1pqPC2069kZpJ69o3qiedLBu+TwipAJ1ovihuN16FeMe2NLiKFOQzYq6KwMp8SqswLX7K814LTQY5Ag69n5xrTVVJXwyHUl+mCG5Z0CPkSCQtyEBEt9TKQC0Q5lLuZyzKJD53mcxIRr0N0VIg1GR2BEq6+8mMCMfwuCAt4b/8ehhYdSIDbj1jHl1x6uMSKetEN2ZVE/12IaOKX5ISX23tXKe26V8lXVa+RcpyElHDipSHebMY2J8wwCRlg+h7VtTCMRygDQWJFgyDCFgmUTyp6R7TlIGsXn+/73jIl1el2a5+VMa11DK7CRaN1cKprv26pdNYpAnTXv/2lpipbtj1uLKMDlpL2QKv3KWUUkq9VEcZm79Mn4mmsLe1rCzuRrxsWqtaTw4q0g3YZJuo1kxXupdFRpnSRpQWwciSq2Dj4zm5xdtk6Akm3QGSnnID/nGcGUYogYmpUBhE5ryl8MhtuVwF1nqtGbwmmzmFLjdWxRdL5QHZRhBv5iecoXijux4Ge3K2MneqVMfMqYeSbL/KrysWrV494JG5H9EwwJP2rE1FEXtupzvRt7NOramxOlK/sgtfle5/yklP8vAlu/37RPnOEADeT9YyRe1T38vonXsO5OWJT5Gedqd3K2VUorP8N25SOx6ydVwgbDsxlFRpIF+kz2U8XMvPfq/IcLS0Sb+qhl9HgqFM7Nbr8kpm/ONiprkMQR6+ugPzlpAflVt9jb4gDgxVW6kn3S3aTnooP8JwcNnST5j/VBUzpesi5br12IH9wZLwrOLZtou3HmunH44l5bu/ZdBjJIjP0jhS2Pas0OsBD72b6U0aGf6kNqVd2x6MSZqL+I2dEwTv5UjhSSPintQK8HjKHiXgyJIWjTQW/EhZ87ANakgaGfekEuLA01PQrKFWGO+dzhmeFAC7W69+xtbdkDQyukDKDBb2oEDiB7XPNiN9Glh3I9Lo8CH9M2+s3I+tP2oUjZQgNpsjkZ4S69dNAHpU8CbdAbpFSrU8rJR8BFLYbQupvRFpZEQgnVLTxRiVP2ku4iulZviq2fBcwn7RmNS+oxuTFKu8GKRH+Xyqcm4DXwEp3qMo5tpEp6g1aRTSYMZg0lVBGtS1ummneyG1HOpAi7gbLW0LKRUtZnQKJhU7VssAi+2sePdLmot4EjIcdq+leyG9UOJUrIHnyGO1FNZSh/smRaEbpNTlFI7ShH7Y3HA3dAtC9pFx42FQw4HfMrnljtmF+5H4pICpvQB2w6Vp7/X/00FE0jK8BoiYpN47PCjSKTgk/E+f0HXF6QOsjPEtrf6ot/DdF23xMPgOfvg/bUGmQX0WSyqwvdFOkSwDR6VQ8TZZKXqQvkPVd+1jqp4tFf+c5sKV7VyaTb52siLEe2M9RrWcnSv9CsYHt9m02GTqgf5SUk9a6kQg3a95XB2YtmybcCGz6tXq09Ie34t7dF7KGLO/LwIZam8ygnhn5XdpQlryT27Q52JCSIk8DMldTmjTW4gcGhseymEPt7PvKV7eSnFeDzrLrMjkJ4REilvaHbLTwNM5HqRKxzF83llNgpGHIbXzx0CHdNoQnwBmqBFecvSJngAAAABJRU5ErkJggg==`;
  }

  draw() {
    if (this.state === 'live') {
    }
    this.ctx.drawImage(this.img, this.pos.x, this.pos.y);
    //if (this.state === 'dead') {
      //this.ctx.fillStyle = '#aaa';
      //this.ctx.fillRect(this.pos.x, this.pos.y, , this.pos.y);
    //}
  }
}
