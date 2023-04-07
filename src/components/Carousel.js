export default class Carousel {
  constructor(carouselConfig) {
    this._carousel = document.querySelector(carouselConfig.carouselSelector);
    this._sectionContainer = this._carousel.querySelector(carouselConfig.sectionSelector);
    this._previewContainer = this._carousel.querySelector(carouselConfig.prewiewSelector)
    this._prevBtn = this._carousel.querySelector(carouselConfig.prevBtnSelector);
    this._nextBtn = this._carousel.querySelector(carouselConfig.nextBtnSelector);
    this._slideSelector = carouselConfig.slideSelector;
    this._prewiewItemSelector = carouselConfig.previewItemSelector;
    this._previewClass = carouselConfig.previewSelector;
    this._previeActiveClass = carouselConfig.previeActiveClass;
    this._keyDown = this._handleNextSlide.bind(this);
    this._nextSlide = this._next.bind(this)
    this._prevSlide = this._prev.bind(this)
  }

  _render() {
    this._offset = 0;

    this._slides.forEach((slide, index) => {
      if (index < this._currentIndex) {
        this._offset += slide.offsetWidth;
      }
    });

    this._sectionContainer.style.transform = `translateX(-${this._offset}px)`;

    this._previews.forEach((preview, index) => {
      index === this._currentIndex
        ? preview.classList.add(this._previeActiveClass)
        : preview.classList.remove(this._previeActiveClass);
    });
  }

  _prev() {
    this._currentIndex === 0
      ? this._currentIndex = this._slides.length - 1
      : this._currentIndex--;

    this._render();
  }

  _next() {
    this._currentIndex === this._slides.length - 1
      ? this._currentIndex = 0
      : this._currentIndex++;

    this._render();
  }

  _goTo(newIndex) {
    if (newIndex < 0 || newIndex > this._slides.length - 1) return;

    this._currentIndex = newIndex;

    this._render();
  }

  _handleNextSlide(evt) {
    if (evt.key === 'ArrowLeft') this._prev();
    if (evt.key === 'ArrowRight') this._next();
  }

  _getListItem(itemClss, imageClass, image, title, name) {
    const itemElement = document.createElement('li');
    const imageElement = document.createElement('img');

    itemElement.classList.add(itemClss);
    imageElement.classList.add(imageClass);

    imageElement.src = image;
    imageElement.alt = `Фото ${title} ${name}`;

    itemElement.append(imageElement);

    return itemElement;
  }

  _setEventListeners() {
    this._prevBtn.addEventListener('click', this._prevSlide);
    this._nextBtn.addEventListener('click', this._nextSlide);

    document.addEventListener('keydown', this._keyDown);

    this._previews.forEach((preview, index) => {
      preview.addEventListener('click', () => this._goTo(index));
    });
  }

  _removeEventListeners() {
    this._prevBtn.removeEventListener('click', this._prevSlide);
    this._nextBtn.removeEventListener('click', this._nextSlide);

    document.removeEventListener('keydown', this._keyDown);
  }

  init(images, title, name) {
    this._currentIndex = 0;
    this._sectionContainer.innerHTML = '';
    this._previewContainer.innerHTML = '';

    this._removeEventListeners();

    images.forEach(image => {
      const newImage = this._getListItem('carousel__section', 'carousel__image', image, title, name);
      const newPreviewImage = this._getListItem('carousel__preview', 'carousel__preview-image', image, title, name);

      this._sectionContainer.append(newImage);
      this._previewContainer.append(newPreviewImage);
    })

    this._slides = this._carousel.querySelectorAll(this._slideSelector);
    this._previews = this._carousel.querySelectorAll(this._prewiewItemSelector);

    this._render();
    this._setEventListeners();
  }
}
