import { useState } from 'react';

import Confetti from 'react-confetti';

import useFormAndValidation from '../hooks/useFormAndValidation';

function Request({ page }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleChangeValidation,
    errors,
    isValid,
    resetForm,
    setErrors,
  } = useFormAndValidation();

  function resetSubmit() {
    setIsSuccess(false);
    setIsError(false);

    resetForm();
  }

  function sendMessage() {
    setIsLoading(true);

    fetch('https://podpotolkom.transcendent.app/send_notification_tg', {
      method: 'POST',
      headers: {
        // eslint-disable-next-line quote-props
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        page,
      }),
    })
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((result) => {
        if (result.ok) {
          setIsSuccess(true);
        } else {
          setIsError(true);
          setErrors({ ...errors, phone: result.description });
          setTimeout(resetSubmit, 5000);
        }
      })
      .catch((err) => {
        setIsError(true);

        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setName('');
        setPhone('');

        setIsLoading(false);
      });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    sendMessage();
  }

  function handleChangeName(evt) {
    setName(evt.target.value);

    handleChangeValidation(evt);
  }

  function handleChangePhone(evt) {
    setPhone(evt.target.value);

    handleChangeValidation(evt);
  }

  return (
    <section id="connect" className="request">
      <h2 className="title title_size_medium">Давайте создавать вместе</h2>
      <div className="request__container">
        <p className="request__description">
          Выезжаем на замер по Москве и области. Проводим онлайн консультации в регионах
          как произвести самостоятельный замер
        </p>
        <form
          action="#"
          className="request__form"
          onSubmit={handleSubmit}
        >
          <label className="request__label" htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              className={`
                request__input
                request__input_value_name
                ${errors.name && 'request__input_type_error'}
              `}
              required
              value={name}
              onChange={handleChangeName}
            />
            <span
              className={`
                request__error
                request__error_name_name
                ${errors.name && 'request__error_visible'}
              `}
            >
              {errors.name}
            </span>
          </label>
          <label className="request__label" htmlFor="phone">
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              minLength="11"
              maxLength="30"
              className={`request__input request__input_value_phone ${errors.phone && 'request__input_type_error'}`}
              required
              value={phone}
              onChange={handleChangePhone}
            />
            <span
              className={`request__error request__error_name_phone ${errors.phone && 'request__error_visible'}`}
            >
              {errors.phone}
            </span>
          </label>
          <button
            type="submit"
            className={`
              request__button-submit
              ${!isValid && 'request__button-submit_disabled'}
              ${isSuccess && 'request__button-submit_state_success'}
              ${isError && 'request__button-submit_state_error'}
            `}
            disabled={!isValid || isSuccess || isError}
          >
            {
              (isLoading && 'Отправляю...')
              || (isSuccess && 'Отправлено')
              || (isError && 'Ошибка')
              || 'Обсудить проект'
            }
            {isSuccess && <div className="request__icon request__icon_type_success"></div>}
            {isError && <div className="request__icon request__icon_type_error"></div>}
          </button>
        </form>
      </div>
      {isSuccess
        && (
          <Confetti
            className="confetti_fix"
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={1000}
          />
        )}
    </section>
  );
}

export default Request;
