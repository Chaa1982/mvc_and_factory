export class Circle {
  constructor(data) {
    const { size, color, borderRadius } = data;
    this.size = size;
    this.color = color;
    this.borderRadius = borderRadius;

    this.element = document.createElement("div");
    this.element.style.width = this.size + "px";
    this.element.style.height = this.size + "px";
    this.element.style.backgroundColor = this.color;
    this.element.style.borderRadius = this.borderRadius + "%";
    this.element.style.margin = 5 + "px";
    document.body.appendChild(this.element);
  }
}

export class Square {
  constructor(data) {
    const { size, color } = data;
    this.size = size;
    this.color = color;

    this.element = document.createElement("div");
    this.element.style.width = this.size + "px";
    this.element.style.height = this.size + "px";
    this.element.style.backgroundColor = this.color;
    this.element.style.margin = 5 + "px";
    document.body.appendChild(this.element);
  }
}
