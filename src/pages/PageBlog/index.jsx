import React, { Component } from 'react';
import ItemArticle from '../../components/ItemArticle';

import { withAppState } from '../../state/withAppState';

import Articles from '../../state/actions/Articles';
import HeaderTypewriter from '../../components/HeaderTypewriter';


import './style.scss';
import Link from 'react-router-dom/Link';

class PageBlog extends Component {

  componentDidMount() {
    Articles.listAll();
  }

  render() {
    const { all } = this.props.articles;
    const length = Object.keys(all).length;
    return (
      <div className="page page-blog">
        <div className="container-small">

          <HeaderTypewriter>Noka Blog 📝</HeaderTypewriter>
          <h2 > A collection of interesting new technologies, findings and experimentations.</h2>
          <p>
            Currently entails all of our articles, experiments and work. If you have something interesting you would like to share with us, please feel free to <Link to="/contact">send us a message</Link>
          </p>
          <div className="container-blog">
            {
              Object.keys(all).map((key) => {
                const article = all[key];
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

      </div>
    );
  }
}

export default withAppState(PageBlog);
