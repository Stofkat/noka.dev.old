import AppState from "../AppState";
import { doRequest } from "../../helpers/Request";
import { API_URL } from "../../constants";

export default class Articles {

  static list() {
      doRequest(`${API_URL}/articles`, "GET").then((result) => {
          const sorted = [...result.data];
          // Keep the index as identifier
          sorted.map((article, index)=>{
              article.localID = index;
          });
          // Next sort based on date
          sorted.sort((a, b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
          });
          let mapped = {};
          sorted.map((article) => {
              const { localID } = article;
              const uriTitle = encodeURIComponent(article.title.replace(/\s+/g, '-'));
              const path = `${localID}/${uriTitle}`
              mapped[localID] = { ...article, uri: path };
          });
          AppState.set({
              articles: {
                  items: mapped
              }
          });
      });

  }

  static setArticle(uri) {
      AppState.set({
          articles: {
              currentArticle: uri,
          }
      });
  }
}