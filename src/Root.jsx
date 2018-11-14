import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './components/reducers';

const Root = (props) => {
  const { children } = props;
  return <Provider store={createStore(reducers, {})}>{children}</Provider>;
};

Root.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Root;
