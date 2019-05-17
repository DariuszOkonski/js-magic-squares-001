class Circle {
  constructor() {
    let width = 50;
    let height = 50;
    let color = 'rgb(0,0,0)';
    let backgroundColor = 'rgb(200,200,200)';
    let borderColor = 'rgb(0,0,0)';

    this.getWidth = () => width;
    this.getHeight = () => height;
    this.getColor = () => color;
    this.getBackgroundColor = () => backgroundColor;
    this.getBorderColor = () => borderColor;
  }

  createElement(number) {
    const div = document.createElement('div');
    div.classList = 'circle';
    div.textContent = number;
    div.style.width = this.getWidth();
    div.style.height = this.getHeight();
    div.style.color = this.getColor();
    div.style.backgroundColor = this.getBackgroundColor();
    div.style.borderColor = this.getBorderColor();

    return div;
  }
}