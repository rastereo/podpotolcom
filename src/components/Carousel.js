export default class Carousel {
  constructor(carouselConfig) {
    this._carousel = document.querySelector(carouselConfig.carouselSelector);
    this._slides = this._carousel.querySelectorAll(carouselConfig.slideSelector);
    this._previews = this._carousel.querySelectorAll(carouselConfig.previewSelector);
    this._sectionContainer = this._carousel.querySelector(carouselConfig.sectionSelector);
    this._prevBtn = this._carousel.querySelector(carouselConfig.prevBtnSelector);
    this._nextBtn = this._carousel.querySelector(carouselConfig.nextBtnSelector);
    this._previeActiveClass = carouselConfig.previeActiveClass;
    this._keyDown = this._handleNextSlide.bind(this);
    this._currentIndex = 0;
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

  _setEventListeners() {
    this._prevBtn.addEventListener('click', () => this._prev());
    this._nextBtn.addEventListener('click', () => this._next());

    document.addEventListener('keydown', this._keyDown);

    this._previews.forEach((preview, index) => {
      preview.addEventListener('click', () => this._goTo(index));
    });
  }

  init() {
    this._setEventListeners();
    this._render();
  }
}
