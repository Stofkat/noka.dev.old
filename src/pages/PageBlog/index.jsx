import React, { Component } from 'react';
import ItemArticle from '../../components/ItemArticle';

import { withAppState  } from '../../state/withAppState';

import './style.scss';
import Articles from '../../state/actions/Articles';

class PageBlog extends Component {

  componentDidMount() {
    Articles.list('blog');
  }

  render() {
    const {items } = this.props.articles;
    const length = Object.keys(items).length;
    return (
      <div className="page">
        <h1>Noka Blog</h1>
        <div className="container-text">
          The latest news in internet privacy and security. This is also the place for more information about the ToffeeShare platform.
          <br /><br />
        </div>
        <div className="container-text">
          {
            Object.keys(items).map((key) => {
              const article = items[length - 1 - key];
              return (
                <ItemArticle
                  key={key}
                  article={article}
                  history={this.props.history}
                />
              );
            })
          }

        </div>
      </div>
    );
  }
}

export default withAppState(PageBlog);
