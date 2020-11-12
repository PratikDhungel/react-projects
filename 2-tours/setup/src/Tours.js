import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
  return (
    <section>
      <div className='title' style={{ marginTop: '50px' }}>
        <h2>Available Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
