let number = 0;

const circle = new Circle();

domElements.btnAdd.addEventListener('click', () => {
  if (++number % 5 === 0)
    addElement(new Circle);
  else
    addElement(new Square())
})

domElements.btnRemove.addEventListener('click', () => {
  if (domElements.divTable.lastElementChild !== null) {
    domElements.divTable.removeChild(domElements.divTable.lastElementChild);
    number--;
    renderResult(number);
  }
})

domElements.btnRemoveAll.addEventListener('click', () => {
  if (domElements.divTable.lastElementChild !== null) {
    domElements.divTable.textContent = '';
    number = 0;
    renderResult(number);
  }
})

const renderResult = (number) => {
  domElements.spanResult.textContent = number;
}

const addElement = (element) => {
  const div = element.createElement(number);
  domElements.divTable.appendChild(div);
  renderResult(number);
}