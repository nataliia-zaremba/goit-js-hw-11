import axios from 'axios';

const API_KEY = '50347658-285688eb76e59c705e33623f4';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 20,
    page: 1,
  });

  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  if (response.status !== 200) {
    throw new Error('Failed to fetch images');
  }

  return response.data;
}
