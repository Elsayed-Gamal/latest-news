import styles from './NewsItem.module.css';

function NewsItem({ newsItem }) {
  const {
    title,
    author,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
    source,
  } = newsItem;
  console.log(source);

  return (
    <div className={styles.newsItem}>
      <img
        src={
          urlToImage ||
          'https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg'
        }
        alt={description}
      />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.author}>Author: {author || 'Unkown'}</div>
      <span className={styles.date}>
        {new Date(publishedAt).toLocaleDateString('en-eg', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        })}
      </span>
      <p className={styles.content}>{content.split('…')[0] + '...'}</p>
      <p className={styles.source}>Source: {source?.name}</p>
      <a href={url} target="_blank">
        Read More
      </a>
    </div>
  );
}

export default NewsItem;
