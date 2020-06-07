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
        <div className="container-center">
          <HeaderTypewriter>A digital playground 🌱</HeaderTypewriter>
          <h2 >Designing innovative digital products from the ground up</h2>

        </div>
        <div className="lower-section section-divider">
          <div className="container-center">
            <p>
              At Noka Development we embrace the transition from experimenting with new technologies to  building creative solutions, encorporating them in our every day live.
        </p>
          </div>
          <div className="container-highlighted">
            {
              Object.keys(highlighted).map((key, i) => {
                const article = highlighted[key];
                return <ArticleHighlighted article={article} index={i} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withAppState(PageHome);