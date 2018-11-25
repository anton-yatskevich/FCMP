export default async function loadData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    throw new Error(err);
  }
}
