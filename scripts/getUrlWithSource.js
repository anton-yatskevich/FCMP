export default function (source, API_KEY) {
  return `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`;
}
