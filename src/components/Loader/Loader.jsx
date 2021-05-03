//модули
// import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

//компоненты

//стили
// import styles from './Loader.module.css';

const Download = ({ type = 'Puff', color, height, width, timeout }) => {
  return (
    <Loader
      type={type}
      color={color}
      height={height}
      width={width}
      timeout={timeout} //3 secs
    />
  );
};

Download.propTypes = {};

export default Download;
