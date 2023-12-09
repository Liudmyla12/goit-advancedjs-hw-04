import axios from 'axios';

export async function fetchImages(query, page) {
  const apiKey = '41067468-719d564db60da357cea4b901d';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
  const { data } = await axios.get(url);
  return data;
}
