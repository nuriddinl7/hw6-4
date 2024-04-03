import React, { useState } from 'react';
import Form from './Form';

const Card = ({ img, title, price, oldPrice, description, itemId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleUpdateItem = (formData) => {
    fetch(`https://63d304794abff88834170d21.mockapi.io/ss/${itemId}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        closeModal();
      }
    })
    .catch(error => console.error('Error updating item:', error));
  };

  return (
    <>
      <div className='card' onClick={openModal}>
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <b>{price}$</b>
          <span>{oldPrice}</span>
        </div>
        <button type='button'>Добавить в корзину</button>
      </div>
      {modalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>
              &times;
            </span>
            <Form handleSubmit={handleUpdateItem} />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;