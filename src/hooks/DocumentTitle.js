import { useEffect } from 'react';

function DocumentTitle(props) {
  useEffect(() => {
    document.title = props.title || 'Под потолком';
  }, [props.title])
}

export default DocumentTitle;
