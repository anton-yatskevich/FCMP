function loadData(url) {
  return fetch(url)
    .then(res => res.json())
    .catch((err) => {
      throw new Error(err);
    });
}
