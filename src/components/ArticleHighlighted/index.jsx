
import React from 'react';
import "./style.scss";
export default function ArticleHighlighted({ article }) {
  return (
    <div className="article-highlighted">
      <img src={article.preview} />
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
    </div>
  );
}