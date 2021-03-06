//модули
import PropTypes from 'prop-types';
import { Component } from 'react';

//компоненти


//стили
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  inputHandler = event => {
    const { currentTarget } = event;
    this.setState({ inputValue: currentTarget.value });
  };

  submitForm = event => {
    event.preventDefault();

    const { inputValue } = this.state;
    const { onSubmit } = this.props;

    onSubmit(inputValue);

    this.resetState();
  };

  resetState = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.submitForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={inputValue}
            onChange={this.inputHandler}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {};

export default SearchBar;
