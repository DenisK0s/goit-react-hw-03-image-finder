import axios from 'axios';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 20625460-dce04eecf80fa07713c408cae';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20625460-dce04eecf80fa07713c408cae';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchData = ({ searchQuery: q, currentPage: page }) => {
  return axios
    .get('', {
      params: { q, page },
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};
