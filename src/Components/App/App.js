import React, { Component } from 'react';
import fetchApi from '../services/fetchApi';
import Loader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    largeImgURL: null,
    error: null,
    searchQuery: '',
    page: 1,
    modal: false,
    largeImageLoading: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    if (this.state.images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  fetchImages = () => {
    this.setState({ loading: true });
    const { searchQuery, page } = this.state;
    fetchApi
      .fetchImageWithQuery(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handlerSearchFormSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  handlerModalOpen = imgURL => {
    this.setState({ modal: true });
    this.setState({ largeImgURL: imgURL });
  };
  handlerModalClose = e => {
    this.setState({ modal: false });
    this.setState({ largeImgURL: null });
  };
  handlerLoadImg = e => {
    this.setState({ loaded: true });
  };

  render() {
    const { images, loading, error, modal, largeImgURL, loaded } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handlerSearchFormSubmit}></Searchbar>
        {error && <p>Oooops, something went wrong: {error.message}</p>}
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onOpen={this.handlerModalOpen}
          ></ImageGallery>
        )}
        {loading && <Loader />}
        {modal && (
          <Modal onClose={this.handlerModalClose}>
            <img src={largeImgURL} alt="" />
          </Modal>
        )}
        {images.length > 0 && !loading && (
          <Button onClick={this.fetchImages}></Button>
        )}
      </>
    );
  }
}
