import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './components/reducers';

const Root = ({ children, initialState = {} }) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxPromise)),
  );

  return <Provider store={store}>{children}</Provider>;
};

Root.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.object,
};
export default Root;
