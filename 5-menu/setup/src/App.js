import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (categoryFilter) => {
    if (categoryFilter === 'all') {
      setMenuItems(items);
      return;
    }
    let newItems = items.filter((item) => item.category === categoryFilter);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
