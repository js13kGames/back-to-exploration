export class Config {
  constructor(
    public starVelocity: number = 0.1,
    public starRadius: number = 1,
    public starColor: string = 'rgba(255, 255, 255, .5)'
  ) {
    if (starVelocity <= 0) {
      this.starVelocity = 0.1;
    }
    if (starRadius === 0) {
      this.starRadius = Math.random();
    }
    if (starRadius <= 0) {
      this.starRadius = 1;
    }
  }
}
