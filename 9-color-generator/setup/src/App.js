import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [shadeDifference, setShadeDifference] = useState(10);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(parseInt(shadeDifference)));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(parseInt(shadeDifference));
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <label htmlFor='hex-value' style={{ marginRight: '10px' }}>
          Hex Value
        </label>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='hex-value'
            id='hex-value'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
            style={{ marginRight: '10px' }}
          />
          <label htmlFor='Shade-Difference' style={{ marginRight: '10px' }}>
            Shade Difference
          </label>
          <input
            type='number'
            min='1'
            max='100'
            name='shade-difference'
            id='shade-difference'
            value={shadeDifference}
            onChange={(e) => setShadeDifference(e.target.value)}
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} color={color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
