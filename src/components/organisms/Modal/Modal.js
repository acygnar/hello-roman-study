import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper } from './Modal.styles.js';
import { Button } from 'components/atoms/Button/Button';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, []);

  return createPortal(
    <ModalWrapper>
      Modal
      <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>,
    modalNode
  );
};
export default Modal;
