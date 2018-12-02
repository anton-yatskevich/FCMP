import { API_KEY } from '../constants';


export const getUrl = (BASE_URL, source) => {
  let url;
  if (source) {
    url = `${BASE_URL}sources=${source}&apiKey=${API_KEY}`;
  } else {
    url = `${BASE_URL}country=us&apiKey=${API_KEY}`;
  }
  return url;
};

export const loadData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      import( /* webpackChunkName: "errorPopup" */ '../ErrorPopup/index')
        .then(module => {
          const ErrorPopup = new module.default();
          ErrorPopup.show();
          
        });
      throw new Error(response.statusText);
    } else {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    throw new Error(err);
  }
};
