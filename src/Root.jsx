import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './components/reducers';

const Root = ({ children, initialState = {} }) => (
  <Provider store={createStore(reducers, initialState)}>{children}</Provider>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.object,
};
export default Root;
