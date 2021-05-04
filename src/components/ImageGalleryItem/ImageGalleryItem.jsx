//модули
import PropTypes from 'prop-types';

//компоненты

//стили
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImageUrl, largeImageUrl, imageName }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={smallImageUrl}
        alt={imageName}
        className={styles.ImageGalleryItemImage}
        data-url={largeImageUrl}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImageUrl: PropTypes.string,
  largeImageUrl: PropTypes.string,
  imageName: PropTypes.string,
};

export default ImageGalleryItem;
