import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();
  console.log(isModalOpen);
  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
      {/* <div className='modal-overlay show-modal'> */}
      <div className='modal-container'>
        <h3>Modal Content</h3>
        <button className='close-modal-btn' onClick={() => toggleModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
