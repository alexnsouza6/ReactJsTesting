import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import reducers from './components/reducers';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
  return <Provider store={store}>{children}</Provider>;
};

Root.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.object,
};
export default Root;
