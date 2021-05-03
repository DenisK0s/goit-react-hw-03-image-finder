//модули
// import PropTypes from 'prop-types';

//компоненты

//стили
import styles from './Modal.module.css';

const Modal = () => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
