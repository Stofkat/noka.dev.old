import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './style/App.scss';
import Header from './components/Header';
import PageHome from './pages/PageHome';
import PageBlog from './pages/PageBlog';
import PageArticle from './pages/PageArticle';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <div className="App">
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route path="/blog" component={PageBlog}/>
              <Route path="/articles/*" component={PageArticle}/>
            </Switch>
          </div>
        </div>
      </Router>
      {/* <Notifications /> */}
      {/* <NotificationUpdate /> */}
    </div>
  );
}

export default App;
