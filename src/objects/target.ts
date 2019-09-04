import { XYPosition } from './xyposition';

export class Target {
  private level = 1;
  private img: HTMLImageElement = new Image();
  private base = 'data:image/png;base64,';
  private last = 0;
  private state = 1;
  private imgs = [
    ``,
    `iVBORw0KGgoAAAANSUhEUgAAAGUAAACLCAMAAABP7KcPAAAAqFBMVEX////7y42J8pCOz5B0/YJ69YbRrmxp8HNa+GdV/GRK7VQ66Ec36EU55EQ25UMdySkayigZyicatiIcqhwHrw4CrQoArAkBqgkCogcBlQIAjgABjQAFhQSlfEGjeTyicTOicTKZeDWcdDKIZyWEWxuCVBWDUxSAUhR5ShMDcgIDcQIFUgRlNgBiNQFVKQRJIwJKHQFIGQBGFwArAAAqAAATBwIAAAAAAADqZSgXAAAAOHRSTlP/////////////////////////////////////////////////////////////////////////ADtcEcoAAAAJcEhZcwAALiMAAC4jAXilP3YAAAV7SURBVHic1Vtdb9s2FGVt2Y7jbknXrZu3bkBf2qBvKQrs/78PzZuxFFjXl63burTJstiyZaflJSmSokjqXkr1tAPIokSJh/fw8lvOfmQELMTvnB9vnlLeyygPJ6MnLFykHM7P2At150BHMIbUjWbLKT/O2BvSO3QWwAH5jSaWhQm+8EU9+FtefAk/5zL8hMwy5ccKAp/BzzVXq2rLBT/uR1PAsEgcOGc6oiyLaXK6OJbX/FiKUK708r36wX5+shYhX/EEWF7L03tP1JDtdPjOlj0IZNPN0B4QYTmQpf17LQK86koGJ2wMp1+4hYzdheC3/HjJhHBGtAALL5IvzFWhQ8NQlg4rj7n4jxRb+J4KYtf8iJdF4506z2oxlzJ5+eofTOh4XUa+2pJYUNgGE4jXl/B7LeBJcsv9kysiWsmpLZjozTbM8jSfOgoYT45jN/RSrIOensQSrDUhNLJAUzY5VBebejxYtOUSM9FW7vy58LLwF7LhXasu5NV4O5UdKxkq7WjUx3SdJIsShWFZjIPc7Fb8DtixvOSt3EiGCvBHsAVOwh3KQNzHMm0FwZyhc64lKk+01guJc21M5lLc8ONzanpZ+StEE/0SD+Wyc35SUczjpkwOljSWOqT7ki2mzu29f1l5SbfibqbGYnm1YXEfH48tSe4xUadzX7Lj9LFdGPtWLDw2qGZFtWl+X2lIwOEQlyOrDHRL9rU6v69xWW2H9UQ9m58MqSy+sS2BZRgpHx9cnZpYZJ2okBiv1omBETvZLLoOsFGV6d8Yi4sRJpc4ZIuoDzegJldmtQ0w0H6nb1dRsWBrhyZBsk1T8VgsHSpUYxmY8A7fP4oRmZP/O9JYYX+ZYzi/KoQtEHvbnLIcqEzKHCk3U1SbuqLXPG4MEaMive7vGu02tpYsXLjvZKg2w9O9JXRAIRew73/F5OzDoNEWq0d2GEwxjkMNdHm/XWuJnIoh1mGoqM/dBMvJzwlpSQy9HlCWyUPDcqKDv52UqxskSO3X5aXXPSjlAhX4VgVq9Wsc66SppT/w3DP1ArqFbwIsRjQ5sD0vg+d8KPsPKRPP2U++22Fb4mU0QDRJzSx6uA4VWS3tWLpncyaWYne2XuHW38diZjd/MvaDuW9NBZYsgvFD906PRkpHWjQJaQksk/3VlkXptoq+/n3t8jmNpUuksFhFv44NOggsnnTELg9uURzLwqf4l57sqvkFxhAMSydAsayrCzFXoedasRzL1UkXK3xf2iPF9sUCXdOle/O4a5aWaGQRFuBzncjSCXrAciZPj0C2qmjQwET7SwLL6ZmYdL58jE8vgaUzoFmEr8EErijb4+5YHpETTGHpCA0svzJmij599aEPtpzK9WUHhIqCYukKdJaRGHZ7TGzDMqOmmMTSCdJZZuDZyHUoDAsX7dIkl9O3NJJtmZEKK1kx3xJFaxYog5EVpmUJyQI9ZQuH7qsni7FxQZOMyJKXA/CCVDR9VewTszhb1tBzYlXrnS0u5LAJZQ+ZZVV+u0ZZOe23YrQ14BQWwuS4BQsdSJYLHdKfLQJgZHbUHUtL9I4F+mDZk03Fcqz+jGTZqFpqrQRGfNffH8Uu/LcJoxisLbP6o4RJU6JiqJ3w1ixEIFlm4Lbi29qp2VWQBmFmZhRb/OuVS8T8vyeKvWX6++TGDfZ0FoXixmzy/C/7l7fYVK4auplmW0Sh3Ci5SqVEP4YvJJRizszlCFx6bv4HATUm7s0tyuUQP70Is1QKBQRT30FZdbOA2fJS3w4XTYMtA9m+3zfyAMmR0GeJ/8wwXTGrYFJZVMc18M1Zc5ZTVy7DtpS732L7S22FcenzefmA2uSV1zKSztIliCz0zaoYS3CXcB64mrsPYlg6xn5YPgL/BgjyLzKgvgAAAABJRU5ErkJggg==`,
    `iVBORw0KGgoAAAANSUhEUgAAAE0AAABYCAMAAACHzIqqAAAAG1BMVEXekWf////yey3wfyfwVSfhcULjXyvsVycAAACiSw1HAAAACXRSTlP//////////wBTT3gSAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEAElEQVR4nK1YiY6EIAwFyiT7/187yYgsV6EtBXUyTfZQ4fl6V/yfuZIAl0tQ/B4o/Vh7ut+gGeNMvAt1Ay1xi/aHaOY+2B20B7JDC9lsy0dGcfUG7QJMi5w12gasPjgfcftClmg7as/RvgF7rGnYvmONtgra4k8tPLZoffP9ErJGs53GzypSkV9wM40ahMEtIHj4Ag2K0TKcEvbfcIPGrmd52Hpln/WNY2hgl165E29orkCvH6EFa7J6uHEyvU4Q0YQ5BB3yLL+jvEfLlcEt4Ka8zpK9TKYbtcw5hhby9TIOoNMl4s4Glt6MXVKxm6UJX2KOAHVDhl6xSIdU0CIvOot42HrhSU+fbNe3IlpSfw03m75IiRI2CTS0hTrxKH9eFJkg1ZfYQWS2GzU5WpCQC9BXuBGlLZgv89SuDRqMzIldBzQQc7BYXAN8t2LMZZ7Ot6qlZK41+PqHow0MaI/znSiSBMpe+r7khqILQ6sLHHn5MfxPVASQ5OueIDTlaYA+HUDVobMZLn2avX+IO7lNkJpHpri8+hRoTu7WrjD4isL0ud33UydrFJScdFaqitdeXOOly0qe84YSyhHYcDn2enrDGfm4QVh5Syt5hJsyreVctjN8SPz8YoASdmNpd/WhIAoPCJ+uG6WUIP5pmms+nUGdmSxnsORShncn1ZjiQuSBO75Cq63a4sZW7yDKJaOS3zdZEzCkkcrovSbIVhL1aJth0ftARigpPYst1PezVpdqMNCJgNuNirRhrK8nPa8BQmFGA/7SbrHjTZytwZgpA+0NtOY0qiYZCsi0OXUZzWBWgWsC84YFtxGaLagEGITxe0KLSE2dRyQtC2Uqixb7JMmFguTmsrCVkqIvbNaALKZKrpQKzi05ODRzdiegSl6HCK6jRAw4BOvwxLeMG5oTmGU7qVURXniB3q/fav292rzVyZFtJ0Gjzvz01ld2MWIpO0fvOXxybTIiRHsyboq0MTDvHJNqGMne8spDVaDmgj45riz19657LarLdfMkAPq3UQGLRs0nVfoUbSMNgOpqBNMpdsO1f0hJ8uz5+BZcj851KKAnhuPExZdBKBEcD1+frVZpuYv4LebbSen4BnSSimV/uJQD3XeG08KB3ApYsaK9nkHiMI2GNgbvvaIUbjp/UKN37c8LEWgQ7rfWz2u6tc6sahm54109fm8abF/YkIyngqUbaCotIudpsBxPwKvU6uVB4IBiNW7Z6/0xPzHNWIwWKF/iph9hkI+KG+egXF/KzbZXkWKiiPuQ0iwORf1gEfVTFCEfY3ippyoQbraeuzRZHNzUPDVkGqHsZi/cHVq1Ew/Np+knnGbnhNeCuUDr9OPOoX/V+HFass76a5m7xj/4lGQ5nWA2WQAAAABJRU5ErkJggg==`,
    `iVBORw0KGgoAAAANSUhEUgAAAHkAAABhCAMAAADFof6NAAAAD1BMVEX////j4+O/v79xcXEAAACVS+zQAAAABXRSTlP/////APu2DlMAAAAJcEhZcwAALiMAAC4jAXilP3YAAANySURBVHic1ZmLstwgCIbDTN7/lW3PWWO4/CBGsp0yPd3NRT9RBGTP83hN2t8/cp++BW78E+LfITd1idBvkJu9A9AvkC0YosvJTV+Qgy4mD8MiPQqDriU38M2TUnKI00pXkhmYtPZk0IXkqcYSXUf2wb9Uo3UZWUwvyfufP4WuIjfnit1XE15E9qZa+ZXy2XaX2LqSW+kKsgLfO0otAfV/z8kz/0RmLN3IBDokz11gKFdz+sEZtE/ewRJvTPctjnbIy9gg5+Jxi6Eh+RFXuJBfDS/N2wGMDZBTW0Tox70FVFy6k+5RDLnZt6fD4NsUs217UuQmPjRBK8pw7RDsHhqj4UvyWK+eJmPNuKe4rYe5ZJjlXoPvzxonS+4BZrzZwdyaC7U7R/dAB/CeY6Id5+fd4ktjdA3me5Av8JbfAmjXVC/yNdO7DtOu8GDDDLCIi9EXUqnPLGwf66HVED7fz8FsRWyGpoP1ic4YF7ha6PMf7Bl4z30ZSvcvaPphxChEu8Kj5AuTHYPfqVZcSjvKj2zoe+qic1WxeSOlo5N7GE43xa2TVEO10t+pDSXltKu7rX8qERMW1nPVTa7s4EqgputM/OJdkeu8ra8roBKH9HtBab/6GMC2xpGob7txNByFvF4aI1tn2470A9Io9fqKnbieRORMzPI5essgsd+OupRvTSaY1CcnCx28bogf4DbWVpCTTYmdmmgUUe9ROa1CMkcn95aCUfALjT+C80ij1TiECaa2pCU/Ed3p+nKfqtljg/HPU9lfyr4TqBB5IpElm1cT5NSm7r3RcpKKhwAyQHUCBJh4RZLr5URJtkU5m+RjDO59xfaVixio3hA4WvXQW+5ZfOYc6UvwiozC7jSO8fgcW45bcSKmpI1N7gjEbPu2AduzCLaw2SB52Y1w56d+p1okr6Od7/FNRP6e83z7RBdM/788S+aF/RKy0mKfPKpbNabgks0eYc4hQkelkRR54s5QBvhpxtPjqI9AZ32iklfSU/NZaNaDrpB/Cr8UFoxl+ILoR+S5kGQ8zD2x5AqnFp103uWeJB00irPehdZ1Ove8JR0r/TwsaaKmXfZFX+f3KlQh+Uk1cNFCPJ3JvUjLZLkSFpbmriltyabktdLdFnlD1KDj6a71YSvz/X/kYQnZ855RaXNtGKvkLckfsBAZndXr2X8ARi4wq1wRdiUAAAAASUVORK5CYII=`,
    `iVBORw0KGgoAAAANSUhEUgAAAGEAAABQCAMAAAA+/uuZAAAAD1BMVEX///+7u7udnZ1BQUEAAADdhJrOAAAABXRSTlP/////APu2DlMAAAAJcEhZcwAALiMAAC4jAXilP3YAAAGBSURBVHic7ZjZEoIwDEUtw/9/MlUUsCV7ulgY75ML9pjcNF3m+SFoyd5N0uNAIiAG85hGQrF+SYiKTzUZlGPIxnSYclMfcANQrY9KiYOECF6QdJUrXbNkyE6qKMSCxaBGaWwYvpYshMrDIoR2lD4+sP8dfmnsfkcMzYy4RW/lsqPNHDu3Z8tIxOi89Y4sGfc3Hh+2kJWgW9RSN8JeTsFbWaQ5NWLgl7qhfUDn2gKOGLVi2G0IYEbuBLfDoob2gVRuUGUCUrijZ0nTyAtjoNafpIckhNKDM0Ed3YdV3IoXqxAk6hWytIks3Ddh/bK470WiGGfYVCu32Qv58FGyodhzVo2AmnDqGo30J4Tzqoa40TGGZtuZlRCWguVHdzcz9brXaE+o0mLJ/VJu9PYQgjP4FXJCO50J3kypzkBwcGcJ4+eHdvoN4Rul4IjnVvr1m8WXff72p6kgYcLnmXv28TGQy/umY2tBbcdwgtro5HDOhDPQfHAvUSwBybgdNlCWBiY8AcyORU8rV9ocAAAAAElFTkSuQmCC`,
    `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`
  ];

  constructor(private ctx: CanvasRenderingContext2D, public pos: XYPosition) {
    this.img.src = this.base + this.imgs[1];
  }

  setLevel(level: number) {
    this.level = level;
    this.img.src = this.base + this.imgs[level];
  }

  draw() {
    if (this.level === 1) {
      if (this.last < 20) {
        this.ctx.drawImage(this.img, this.pos.x, this.pos.y);
      } else if (this.last < 40) {
        this.ctx.save();
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(this.img, -this.pos.x-100, this.pos.y);
        this.ctx.restore();
      }
    } else if (this.level === 2) {
      if (this.last < 20) {
        this.ctx.drawImage(this.img, this.pos.x, this.pos.y+40);
      } else if (this.last < 40) {
        this.ctx.save();
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(this.img, -this.pos.x-100, this.pos.y+40);
        this.ctx.restore();
      }
    } else if (this.level === 3) {
      if (this.last < 20) {
        this.ctx.drawImage(this.img, this.pos.x, this.pos.y+36);
      } else if (this.last < 40) {
        this.ctx.save();
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(this.img, -this.pos.x-100, this.pos.y+36);
        this.ctx.restore();
      }
    } else if (this.level === 4) {
      if (this.last < 20) {
        this.ctx.drawImage(this.img, this.pos.x, this.pos.y+50);
      } else if (this.last < 40) {
        this.ctx.save();
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(this.img, -this.pos.x-100, this.pos.y+50);
        this.ctx.restore();
      }
    } else if (this.level === 5) {
      if (this.last < 20) {
        this.ctx.drawImage(this.img, this.pos.x, this.pos.y+58);
      } else if (this.last < 40) {
        this.ctx.save();
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(this.img, -this.pos.x-100, this.pos.y+58);
        this.ctx.restore();
      }
    }
    if (!this.state) return;
    this.last = this.last < 39 ? this.last+1 : 0;
  }

  stop() {
    this.state = 0;
  }

  start() {
    this.state = 1;
  }
}
