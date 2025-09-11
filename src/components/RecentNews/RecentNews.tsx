import React from 'react';

import styles from './RecentNews.module.css';

const news = [
  "News Article Title 1",
  "News Article Title 2",
  "News Article Title 3",
]

const RecentNews: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Останні новини</div>
      <div className={styles.newsList}>
        {news.map((article, index) => (
          <div key={index} className={styles.newsItemContainer} onClick={() => alert(`Navigating to: ${article}`)}>
            <span className={styles.newsItemContent}>{article}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentNews;