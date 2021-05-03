//модули
import PropTypes from 'prop-types';

//компоненты
import ImageGalleryItem from '../ImageGalleryItem';

//стили
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} smallImage={webformatURL} imageName={tags} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
