import { API_KEY } from '../constants';

const getUrl = (BASE_URL, source) => {
  let url;
  if (source) {
    url = `${BASE_URL}sources=${source}&apiKey=${API_KEY}`;
  } else {
    url = `${BASE_URL}country=us&apiKey=${API_KEY}`;
  }
  return url;
};

export default getUrl;
