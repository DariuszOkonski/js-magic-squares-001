class Square {
  constructor() {
    let width = 50;
    let height = 50;
    let color = 'rgb(0,0,0)';
    let backgroundColor = this.randomBackgroundColor();

    this.getWidth = () => width;
    this.getHeight = () => height;
    this.getColor = () => color;
    this.getBackgroundColor = () => backgroundColor;
  }

  randomBackgroundColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  }

  createElement(number) {
    const div = document.createElement('div');
    // numberOfSquares++;
    div.classList = 'square';
    div.textContent = number;
    div.style.color = this.getColor();
    div.style.backgroundColor = this.getBackgroundColor();

    return div;
  }
}