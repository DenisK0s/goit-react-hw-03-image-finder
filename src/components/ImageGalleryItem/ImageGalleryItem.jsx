//модули
import PropTypes from 'prop-types';

//компоненты

//стили
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImage, imageName }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={smallImage}
        alt={imageName}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string,
  imageName: PropTypes.string,
};

export default ImageGalleryItem;
