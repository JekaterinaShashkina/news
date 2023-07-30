export const renderNews = (data, err) => {
  if (err) {
    console.warn(`err: ${err}, data: ${data}`);
    return;
  }
  console.log('renderNews is running');
  const containerNews = document.querySelector('.container__news');
  const newsList = containerNews.querySelector('.news-list');
  newsList.innerHTML = '';
  const news = data.articles.map((item) => {
    const { author, title, description, publishedAt, urlToImage, url } = item;
    const card = document.createElement('li');
    card.classList.add('news-item');
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('news-title');
    const titleLink = document.createElement('a');
    titleLink.target = '_blank';
    titleLink.href = url;
    titleLink.classList.add('news-link');
    titleLink.textContent = title;
    cardTitle.append(titleLink);

    const image = new Image();
    image.classList.add('news-image');
    image.height = 200;
    image.src = urlToImage;

    const desc = document.createElement('p');
    desc.classList.add('news-description');
    desc.textContent = description;

    const newsFooter = document.createElement('div');
    newsFooter.classList.add('news-footer');
    const d = new Date(Date.parse(publishedAt)).toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    const h = new Date(Date.parse(publishedAt)).toLocaleString('ru-RU', {
      hour: 'numeric',
      minute: 'numeric',
    });
    newsFooter.innerHTML = `
    <time class="news-datetime" datetime="${publishedAt}">
        <span class="news-date">${d}</span> ${h}
    </time>
    <p class="news-author">${author}</p>
    `;
    card.append(image, cardTitle, desc, newsFooter);

    return card;
  });
  newsList.append(...news);
  return newsList;
};

export const renderSearch = (data, err) => {
  if (err) {
    console.warn(`err: ${err}, data: ${data}`);
    return;
  }
  console.log('renderSearch is running');
  const containerSearch = document.querySelector('.container__search');
  const newsList = containerSearch.querySelector('.news-list');
  newsList.innerHTML = '';
  const news = data.articles.map((item) => {
    const { author, title, description, publishedAt, urlToImage, url } = item;
    const card = document.createElement('li');
    card.classList.add('news-item');
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('news-title');
    const titleLink = document.createElement('a');
    titleLink.target = '_blank';
    titleLink.href = url;
    titleLink.classList.add('news-link');
    titleLink.textContent = title;
    cardTitle.append(titleLink);

    const image = new Image();
    image.classList.add('news-image');
    image.height = 200;
    image.src = urlToImage;

    const desc = document.createElement('p');
    desc.classList.add('news-description');
    desc.textContent = description;

    const newsFooter = document.createElement('div');
    newsFooter.classList.add('news-footer');
    const d = new Date(Date.parse(publishedAt)).toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    const h = new Date(Date.parse(publishedAt)).toLocaleString('ru-RU', {
      hour: 'numeric',
      minute: 'numeric',
    });
    newsFooter.innerHTML = `
    <time class="news-datetime" datetime="${publishedAt}">
        <span class="news-date">${d}</span> ${h}
    </time>
    <p class="news-author">${author}</p>
    `;
    card.append(image, cardTitle, desc, newsFooter);

    return card;
  });
  newsList.append(...news);
  return newsList;
};
