import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  const { toggleModal, toggleSidebar } = useGlobalContext();
  return (
    <main>
      <button className='sidebar-toggle' onClick={() => toggleSidebar(true)}>
        <FaBars />
      </button>
      <button className='btn' onClick={() => toggleModal(true)}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
