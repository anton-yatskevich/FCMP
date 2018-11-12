export default (
  function getData(url, headerText, createListCallback, parentNode, createItemCallback) {
    return fetch(url)
      .then(res => res.json())
      .then(data => createListCallback(data, headerText, parentNode, createItemCallback))
      .catch((err) => {
        throw new Error(err);
      });
  });
