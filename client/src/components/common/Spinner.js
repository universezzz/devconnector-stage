import React from 'react';

import spinner from '../../img/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      style={{ width: '300px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  );
}

export default Spinner;
