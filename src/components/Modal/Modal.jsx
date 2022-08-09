
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import { useEffect } from 'react';

const Modal = ({ largeImageURL, toogleModal }) => {

    useEffect(()=> {
      const body = document.querySelector('body');
        body.style.overflow = 'hidden';
    
        window.addEventListener('keydown', onClicEscape);
        return () => {
          const body = document.querySelector('body');
        body.style.overflow = 'auto';
    
        window.removeEventListener('keydown', onClicEscape);
        }
    })
    
    
      const onOverlayClick = e => {
        e.target === e.currentTarget && toogleModal();
      };
    
      const onClicEscape = e => {
        if (e.code === 'Escape') {
          toogleModal();
        }
    }

    return (
        <div className={s.overlay} onClick={onOverlayClick}>
            <div className={s.modal}>
                <img src={largeImageURL} alt="" />
             </div>
        </div>
        )
   
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  toogleModal: PropTypes.func.isRequired
}

export default Modal