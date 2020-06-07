import React, { Component } from 'react';
import "./style.scss";
import ArticleHighlighted from '../../components/ArticleHighlighted';
import Articles from '../../state/actions/Articles';
import { withAppState } from '../../state/withAppState';
import HeaderTypewriter from '../../components/HeaderTypewriter';

class PageHome extends Component {
  componentDidMount() {
    Articles.listHighlighted();
  }
  render() {

    const { highlighted } = this.props.articles;
    const length = Object.keys(highlighted).length;

    return (
      <div className="page page-home">
        <HeaderTypewriter>A digital playground 🌱</HeaderTypewriter>
        <h2 >Designing innovative digital products from the ground up</h2>
        <p>
          At Noka Development we embrace the transition from experimenting with new technologies to  building creative solutions, encorporating them in our every day live.
        </p>
        <h3 className="header-divider">Latest creations</h3>
        <div className="container-highlighted">
          {
            Object.keys(highlighted).map((key, i) => {
              if (i < 3) {
                const article = highlighted[key];
                return <ArticleHighlighted article={article} index={i} />
              } else {
                return null;
              }
            })
          }
        </div>
        <h3 className="header-divider">Other work</h3>
        <div className="container-highlighted">
          {
            Object.keys(highlighted).map((key, i) => {
              if (i > 2) {
                const article = highlighted[key];
                return <ArticleHighlighted article={article} index={i} />
              } else {
                return null;
              }
            })
          }
        </div>
      </div>
    );
  }
}

export default withAppState(PageHome);