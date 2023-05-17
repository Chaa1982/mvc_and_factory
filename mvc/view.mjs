import { Square } from "./models.mjs";
import { Circle } from "./models.mjs";
import { Change } from "./controller.mjs";

export class Factory {
  static cases = {
    Circle,
    Square,
  };
  constructor(data) {
    const { size, color, borderRadius = 0 } = data;
    if (borderRadius) {
      new Circle(data);
      Change.checkCreatedShape();
    } else {
      new Square(data);
      Change.checkCreatedShape();
    }
  }
}
