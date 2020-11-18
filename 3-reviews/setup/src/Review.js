import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const loopReviews = (currentIndex) => {
    if (currentIndex > people.length - 1) {
      return 0;
    }
    if (currentIndex < 0) {
      return people.length - 1;
    }
    return currentIndex;
  };

  const showRandomReview = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = loopReviews(randomIndex + 1);
    }
    setIndex(randomIndex);
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return loopReviews(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return loopReviews(newIndex);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <div className='quote-icon'>
          <FaQuoteRight></FaQuoteRight>
        </div>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => prevPerson()}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => nextPerson()}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() => showRandomReview()}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
