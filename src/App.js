//модули
import { Component } from 'react';
// import PropTypes from 'prop-types';

//компоненты
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
// import Modal from './components/Modal';
import Loader from './components/Loader';

//Сервисы
import { fetchData } from './services/api-service';
import { scrollDown } from './utils/scroll';

class App extends Component {
  state = {
    images: [],
    modalOpen: false,
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    largeImageUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  submitFormHandler = value => {
    this.setState({ searchQuery: value, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;

    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    fetchData(options)
      .then(data => {
        return this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        scrollDown();
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading } = this.state;
    const isLoadMoreButtonVisible = images.length > 0 && !isLoading;
    return (
      <>
        <SearchBar onSubmit={this.submitFormHandler} />
        <ImageGallery images={images} />
        {isLoading && <Loader type="Bars" />}
        {isLoadMoreButtonVisible && (
          <Button clickHandler={this.fetchImages}>Load More</Button>
        )}
        {/* <Modal /> */}
      </>
    );
  }
}

export default App;
