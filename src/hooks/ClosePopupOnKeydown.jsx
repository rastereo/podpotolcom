import { useEffect } from 'react';

function ClosePopupOnKeydown({ action }) {
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') action();
    }

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  });
}

export default ClosePopupOnKeydown;
