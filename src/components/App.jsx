import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import Header from './Header';

export default () => (
  <Fragment>
    <Header />
    <Route exact path="/" component={CommentList} />
    <Route path="/post" component={CommentBox} />
  </Fragment>
);
