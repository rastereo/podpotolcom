import React from 'react';
import { formValidationConfig } from '../utils/formValidationConfig.js';
import FormValidator from '../components/FormValidator.js';
import Postmail from '../hooks/Postmail.js';

function Request() {
  React.useEffect(() => {
    const input = document.querySelector('.request__input_value_phone');
    const requestForm = document.querySelector('.request__form')
    const formValidator = new FormValidator(formValidationConfig, requestForm);

    formValidator.enableValidation();
    formValidator.resetValidation();

    const prefixNumber = (str) => {
      if (str === '7') {
        return '7 (';
      }
      if (str === '8') {
        return '8 (';
      }
      if (str === '9') {
        return '7 (9';
      }
      return '7 (';
    };

    input.addEventListener('input', (e) => {
      const value = input.value.replace(/\D+/g, '');
      const numberLength = 11;

      let result;
      if (input.value.includes('+8') || input.value[0] === '8') {
        result = '';
      } else {
        result = '+';
      }

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[i];
      }

      input.value = result;
    });
  });

  return (
    <section id='connect' className='request'>
      <h2 className='title title_size_medium'>Давайте создавать вместе</h2>
      <div className='request__container'>
        <p className='request__description'>Выезжаем на замер по Москве и области. Проводим онлайн консультации в регионах
          как произвести самостоятельный замер</p>
        <form action='#' className='request__form'>
          <label className='request__label'>
            <input
              type='text'
              name='name'
              placeholder='Имя'
              minLength='2'
              maxLength='30'
              className='request__input request__input_value_name'
              required
            />
            <span className='request__error request__error_name_name'></span>
          </label>
          <label className='request__label'>
            <input
              type='tel'
              name='phone'
              placeholder='Телефон'
              minLength='17'
              maxLength='18'
              className='request__input request__input_value_phone'
              required
            />
            <span className='request__error request__error_name_phone'></span>
          </label>
          <button type='submit' className='request__button-submit'>Обсудить проект</button>
        </form>
      </div>
      <Postmail />
    </section>
  );
}

export default Request;
