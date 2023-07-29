import fetchRequest from './fetchRequest.js';
import { renderNews } from './renderNews.js';

const containerNews = document.querySelector('container__news');
const initNews = async () => {
  const news = await fetchRequest('', {
    callback: renderNews,
  });
  console.log(news);
  // containerNews.append(news);
};
initNews();
