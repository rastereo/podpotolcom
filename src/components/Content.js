export default class Content {
  constructor({ data, callback }) {
    this._title = data.title;
    this._popupTitle = data.popupTitle;
    this._description = data.description;
    this._mainImages = data.mainImages;
    this._prices = data.prices;
    this._beds = data.beds;
    this._callback = callback;
  }

  _getTemplateCard(templateId, cardSelector) {
    const cardElement = document
      .querySelector(templateId)
      .content
      .querySelector(cardSelector)
      .cloneNode(true);

    return cardElement;
  }

  _getListItem(text, elementClass) {
    const itemElement = document.createElement('li');
    const textElement = document.createElement('p');

    textElement.textContent = text;
    textElement.classList.add(elementClass);

    itemElement.append(textElement);

    return itemElement;
  }

  renderMainBlock() {
    this._mainBlockElement = document.querySelector('.title-block');

    this._titleElement = this._mainBlockElement.querySelector('.title');
    this._descriptionElement = this._mainBlockElement.querySelector('.title-block__description');
    this._containerElement = this._mainBlockElement.querySelector('.title-block__grid');

    this._titleElement.textContent = this._title;
    this._descriptionElement.textContent = this._description;

    this._mainImages.forEach(image => {
      const imagesElement = document.createElement('img');

      imagesElement.src = image;
      imagesElement.classList.add('title-block__image');
      imagesElement.alt = `Фото ${this._title}`;

      this._containerElement.append(imagesElement);
    });
  }

  renderPriceCard(templateId, cardSelector, containerSelector) {
    this._priceContainerElement = document.querySelector(containerSelector);

    this._prices.forEach(price => {
      const newCard = this._getTemplateCard(templateId, cardSelector);
      const titleCard = newCard.querySelector('.price__title');
      const sizeContainer = newCard.querySelector('.price__sizes');
      const optionContainer = newCard.querySelector('.price__options');

      titleCard.textContent = price.title;

      price.sizes.forEach(sizeText => {
        sizeContainer.append(this._getListItem(sizeText, 'price__size'));
      });

      price.options.forEach(optionText => {
        optionContainer.append(this._getListItem(optionText, 'price__option'));
      });

      this._priceContainerElement.append(newCard);
    });
  }

  renderCards(templateId, cardSelector, containerSelector){
    this._assortmentContainertElement = document.querySelector(containerSelector);

    this._beds.forEach(bed => {
      const newCard = this._getTemplateCard(templateId, cardSelector);
      const titleCard = newCard.querySelector('.card__description');
      const imageCard = newCard.querySelector('.card__image');

      titleCard.textContent = bed.name;
      imageCard.src = bed.cover;
      imageCard.alt = `Фото ${this._popupTitle} «${bed.name}»`;

      newCard.addEventListener('click', () => {
        this._callback(bed.images, this._popupTitle, bed.name, bed.description);
      });

      this._assortmentContainertElement.append(newCard);
    })
  }
}
