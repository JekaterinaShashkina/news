import fetchRequest from './fetchRequest.js';
import { renderNews, renderSearch } from './renderNews.js';
const choicesElem = document.querySelector('.js-choice');

const containerNews = document.querySelector('.container__news');
const containerSearch = document.querySelector('.container__search');

const initSelectNews = async () => {
  let target = '';

  if (!choicesElem.value) {
    const news = await fetchRequest('/top-headlines?country=us&pageSize=8', {
      callback: renderNews,
      headers: {
        'X-Api-Key': '96d6240eefde440e9d4cce8e0ce4d029',
      },
    });
    containerNews.append(news);
  }
  choicesElem.addEventListener('change', (e) => {
    e.preventDefault();
    if (e.target.value) {
      target = e.target.value;
    }
    const select = fetchRequest(`/top-headlines?country=${target}&pageSize=8`, {
      callback: renderNews,
      headers: {
        'X-Api-Key': '96d6240eefde440e9d4cce8e0ce4d029',
      },
    });
    select.then((elem) => {
      containerNews.append(elem);
    });
  });
};

const initSearch = async () => {
  const title = document.querySelector('.title');
  const searchForm = document.querySelector('.form-search');
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    title.textContent = `По вашему запросу “${searchForm.search.value}” найдено 8 результатов`;

    return Promise.all([
      fetchRequest(`/top-headlines?q=${searchForm.search.value}&pageSize=4`, {
        callback: renderNews,
        headers: {
          'X-Api-Key': '96d6240eefde440e9d4cce8e0ce4d029',
        },
      }),
      fetchRequest(`/everything?q=${searchForm.search.value}&pageSize=8`, {
        callback: renderSearch,
        headers: {
          'X-Api-Key': '96d6240eefde440e9d4cce8e0ce4d029',
        },
      }),
    ]);
  });
};

initSelectNews();
initSearch().then((data) => {
  containerNews.append(data[0]);
  containerSearch.append(data[1]);
});
