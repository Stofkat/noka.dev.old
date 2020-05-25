import React from 'react';
import "./style.scss";
import ArticleHighlighted from '../../components/ArticleHighlighted';

export default function PageHome() {
  return (
    <div className="page page-home">
      <h1 className="typewriter">A digital playground</h1>
      <h2 >Designing innovative digital products from the ground up</h2>
      <div className="container-highlighted">
        <ArticleHighlighted article={{
          title: "Pyqabu",
          summary: "Augmented reality at its best"
        }} />
        <ArticleHighlighted article={{
          title: "Pyqabu",
          summary: "Augmented reality at its best"
        }} />
        <ArticleHighlighted article={{
          title: "Pyqabu",
          summary: "Augmented reality at its best"
        }} />
      </div>
    </div>
  );
}