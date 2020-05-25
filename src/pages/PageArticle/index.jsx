import React, { Component, Fragment } from 'react';
import Link from 'react-router-dom/Link';

import { withAppState } from '../../state/withAppState';
import './style.scss';

import Articles from '../../state/actions/Articles';
class PageArticle extends Component {
  constructor(props) {
    super(props);
    const { articles } = this.props;
    const articleURI = window.location.pathname.split('/')[2];
    Articles.setArticle(articleURI);
    if (Object.keys(articles.items).length === 0) {
      Articles.list();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { articles } = this.props;
    const { currentArticle } = articles;
    const article = (articles.items && currentArticle) ?
      articles.items[articles.currentArticle] : null;
    return (
      <div className="page page-article">
        {article &&
          <Fragment>
            <div className="header">
              <span className="button-back" onClick={() => { this.props.history.goBack() }}>
                {/* <img className="icon-back" src={require("../../assets/img/next.svg")} /> */}
                Back to index
              </span>
              <h1>{article.title}</h1>
              {article.date &&
                <span className="date">
                  <img src={require("../../assets/img/calendar.svg")} />
                  {new Date(article.publishDate).toLocaleDateString()}
                  <br /><br />
                </span>
              }
            </div>
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </Fragment>
        }
      </div>
    );
  }
}

export default withAppState(PageArticle);