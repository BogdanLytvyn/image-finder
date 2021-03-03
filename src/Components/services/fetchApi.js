import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '16983876-2e0d7c5bd7f8d708e3eb2a9d0';

const fetchImageWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { fetchImageWithQuery };
