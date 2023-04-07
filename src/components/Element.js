export default class Element {
  constructor (elementSelector) {
    this._container = document.querySelector(elementSelector);
  }

  render(text) {
    this._container.textContent = text;
  }

}
