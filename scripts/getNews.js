export default (
  function getNews(url, headerText, createListCallback, parentNode, createAticleCallback) {
    fetch(url)
      .then(res => res.json())
      .then(data => createListCallback(data, headerText, parentNode, createAticleCallback))
      .catch((err) => {
        throw new Error(err);
      });
  });
