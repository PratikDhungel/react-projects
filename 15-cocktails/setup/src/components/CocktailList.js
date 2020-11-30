import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  console.log(loading);
  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className='section-title'>No Cocktails match your search Criteria</h2>;
  }

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  );
};

export default CocktailList;
