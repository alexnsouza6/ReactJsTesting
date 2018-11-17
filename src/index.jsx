import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Root from './Root';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Root>,
  document.querySelector('#root'),
);
