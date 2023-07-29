export const renderNews = (err, data) => {
  if (err) {
    console.log(err);
    // console.warn(err, data);
    return;
  }
  console.log('renderGood is running');
  const newsList = document.querySelector('news__list');

  const news = data.articles.map((item) => {
    const card = document.createElement('li');
    console.log(item);
    card.classList.add('news-item');
    // const img = new Image();
    // img.classList.add('news-image');
    // img.height = 200;
    // img.src = item.urlToImage;
    const title = document.createElement('h3');
    title.classList.add('news-title');
    const titleLink = document.createElement('a');
    titleLink.href = '#';
    titleLink.classList.add('news-link');
    titleLink.textContent = item.title;

    title.append(titleLink);
    card.append(title);
    return card;
  });
  newsList.append(...news);
  console.log('newsList');
  return newsList;
};

`<li class="news-item">
<img src="https://loremflickr.com/270/200" alt="Продажи китайских смартфонов в России выросли в два раза" class="news-image" height="200">
<h3 class="news-title">
  <a href="#" class="news-link" target="_blank">Продажи китайских смартфонов в России выросли в два раза</a>
</h3>
<p class="news-description">По данным МТС, продажи устройств Huawei за первые две недели марта увеличились на 300%...</p>
<div class="news-footer">
  <time class="news-datetime" datetime="2022-03-16T16:11:06Z">
    <span class="news-date">16/03/2022</span> 11:06
  </time>
  <p class="news-author">Эрик Крипке</p>
</div>
</li>`;
