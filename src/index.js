import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
    <Router>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route exact path="/" component={PostsIndex}/>
        </Switch>
      </div>
    </Router>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
