export interface Level {
  control(identifier: string): void;
  draw(): void;
}
