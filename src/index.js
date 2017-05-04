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
import injectTapEventPlugin from 'react-tap-event-plugin';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostDetails from './components/post_details';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

injectTapEventPlugin();
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
    <Router>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route exact path="/" component={PostsIndex} />
        </Switch>
      </div>
    </Router>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
