export default class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
  }

  _makeInvalidInput(input) {
    input.classList.add(this._inputErrorClass);
  }

  _removeInvalidInput(input) {
    input.classList.remove(this._inputErrorClass);
  }

  _showErrorMessage(input, errorSelector) {
    errorSelector.classList.add(this._errorClass);
    errorSelector.textContent = input.validationMessage;
  }

  _hideErrorMessage(errorSelector) {
    errorSelector.classList.remove(this._errorClass);
    errorSelector.textContent = '';
  }

  _toggleInputValidation(input, errorSelector) {
    if (!input.validity.valid) {
      this._makeInvalidInput(input);
      this._showErrorMessage(input, errorSelector);
    } else {
      this._removeInvalidInput(input);
      this._hideErrorMessage(errorSelector);
    }
  }

  _checkInputsInvalid() {
    return this._inputList.some(input => {
      return !input.validity.valid;
    });
  }

  _addDisabledSubmit() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  _removeDisabledSubmit() {
    this._submitButton.disabled = false;
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }

  _toggleDisabledSubmit() {
    this._checkInputsInvalid()
      ? this._addDisabledSubmit()
      : this._removeDisabledSubmit();
  }

  _getErrorSelector(input) {
    this._error = this._form.querySelector(`.request__error_name_${input.name}`);

    return this._error;
  }

  _setEventListeners(input, errorSelector) {
    input.addEventListener('input', () => {
      this._toggleInputValidation(input, errorSelector);
      this._toggleDisabledSubmit();
    });
  }

  enableValidation() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._inputList.forEach(input => {
      this._setEventListeners(input, this._getErrorSelector(input));
    });
  }

  resetValidation() {
    this._inputList.forEach(input => {
      this._removeInvalidInput(input);
      this._hideErrorMessage(this._getErrorSelector(input));
    });
    this._toggleDisabledSubmit();
  }
}
