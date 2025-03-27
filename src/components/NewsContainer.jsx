import NewsItem from './NewsItem';
import styles from './NewsContainer.module.css';

function NewsContainer({ news }) {
  return (
    <div className={styles.newsContainer}>
      {news.articles.map((article) => (
        <NewsItem key={article.title} newsItem={article} />
      ))}
    </div>
  );
}

export default NewsContainer;
