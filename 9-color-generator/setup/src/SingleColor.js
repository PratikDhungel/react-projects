import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);
  const { rgb, weight, hex } = color;
  const bcg = rgb.join(',');
  const hexValue = `#${hex}`;

  const showAlert = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => showAlert()}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
