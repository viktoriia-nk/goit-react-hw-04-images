
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const ImageGalleryItem =({webformatURL, largeImageURL}) => {

    const [modal, setModal] = useState(false)

const togleModal = () => {
    setModal(!modal)
      };
   
        return(
            <>
            <li className={s.gallery_item}
            onClick={togleModal}  >
                <img className={s.gallery_item__image} src={webformatURL} alt="" />
            </li>
            {modal && (<Modal largeImageURL={largeImageURL} toogleModal={togleModal}/>)}
            </>
            )
            
    
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
}

export default ImageGalleryItem