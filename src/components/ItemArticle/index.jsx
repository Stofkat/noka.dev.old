import React from "react";
import Link from "react-router-dom/Link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import showdown from "showdown";

import "./style.scss";
import { API_URL } from "../../constants";

// Shorten a string to less than maxLen characters without truncating words.
function shorten(str, maxLen, separator = ' ') {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}
const MAX_LENGTH = 200;
export default function ItemArticle({ article, history }) {
  let { summary, body, title, uri, image } = article;
  if (!summary) {
    summary = `${shorten(body, MAX_LENGTH)} ... `;
  }
  const converter = new showdown.Converter();

  summary = converter.makeHtml(summary);
  console.log(image);
  return (
    <div className="item-article">
      {image &&
        <img
          src={`${API_URL}${image.url}`}
          alt="preview"
          className="image-preview"
        />
      }
      <div className="container-content">
        <div>
          {article.publishDate &&
            <span className="date">
              <img alt="date" src={require("../../assets/img/calendar.svg")} />
              {new Date(article.publishDate).toLocaleDateString()}
              {`  -  `}
            </span>
          }
          <h3>{title}</h3>
        </div>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: summary }} />
        <div className="link-to-article" >
          {summary && <Link to={`/articles/${uri}`}>
            Read more
           <FontAwesomeIcon size="1x" icon={faArrowRight} />
          </Link>
          }
        </div>
      </div>
    </div >
  );
}


