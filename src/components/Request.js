import { useState } from 'react';

import { useFormAndValidation } from '../hooks/useFormAndValidation';

function Request(props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const { handleChangeValidation, errors, isValid, resetForm } = useFormAndValidation();

  function sendMessage(name, phone) {
    fetch('https://podpotolkom.transcendent.app/send_notification_tg', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        page: props.page
      })
    })
    .then((res) => {
      setName('');
      setPhone('')
      resetForm()
      console.log(res.status);
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    sendMessage(name, phone)
  }

  function handleChangeName(evt) {
    setName(evt.target.value);

    handleChangeValidation(evt)
  }

  function handleChangePhone(evt) {
    setPhone(evt.target.value)

    handleChangeValidation(evt)
  }

  return (
    <section id='connect' className='request'>
      <h2 className='title title_size_medium'>Давайте создавать вместе</h2>
      <div className='request__container'>
        <p className='request__description'>Выезжаем на замер по Москве и области. Проводим онлайн консультации в регионах
          как произвести самостоятельный замер</p>
        <form
          action='#'
          className='request__form'
          onSubmit={handleSubmit}
        >
          <label className='request__label'>
            <input
              type='text'
              name='name'
              placeholder='Имя'
              minLength='2'
              maxLength='30'
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
          <label className='request__label'>
            <input
              type='tel'
              name='phone'
              placeholder='Телефон'
              minLength='11'
              maxLength='30'
              className={`request__input request__input_value_phone ${errors.phone && 'request__input_type_error'}`}
              required
              value={phone}
              onChange={handleChangePhone}
            />
            <span
              className={`
                request__error
                request__error_name_phone
                ${errors.phone && 'request__error_visible'}
              `}
            >
              {errors.phone}
            </span>
          </label>
          <button
            type='submit'
            className={`
              request__button-submit
              ${!isValid && 'request__button-submit_disabled'}
            `}
            disabled={!isValid}
          >Обсудить проект</button>
        </form>
      </div>
    </section>
  );
}

export default Request;
