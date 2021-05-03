//модули
import PropTypes from 'prop-types';

//стили
import styles from './Button.module.css';

const Button = ({ clickHandler, children }) => {
  return (
    <button type="button" className={styles.Button} onClick={clickHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func,
};

export default Button;
