import axios from 'axios';

const API_KEY = '46829059-b190e2d34be3baff3edaad1bd';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImages(query, page, perPage) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: perPage,
      page,
    },
  });

  return response.data;
}