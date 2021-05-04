//модули
import PropTypes from 'prop-types';

//компоненты
import ImageGalleryItem from '../ImageGalleryItem';

//стили
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, modalHandler }) => {
  return (
    <ul className={styles.ImageGallery} onClick={modalHandler}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImageUrl={webformatURL}
          largeImageUrl={largeImageURL}
          imageName={tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  modalHandler: PropTypes.func
};

export default ImageGallery;
