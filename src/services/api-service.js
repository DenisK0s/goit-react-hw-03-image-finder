import axios from 'axios';

import apiOptions from '../settings/apiOptions';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 20625460-dce04eecf80fa07713c408cae';

export const fetchData = ({ searchQuery, currentPage }) => {
  const { BASE_URL, API_KEY, IMAGES_PER_PAGE } = apiOptions;

  const queryString = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&per_page=${IMAGES_PER_PAGE}&page=${currentPage}`;

  return axios.get(queryString).then(({ data }) => data);
};
