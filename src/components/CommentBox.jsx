import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';

class CommentBox extends Component {
  static propTypes = {
    saveComment: PropTypes.func.isRequired,
  };

  state = { comment: '' };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    const { comment } = this.state;
    const { saveComment } = this.props;
    event.preventDefault();
    saveComment(comment);
    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h4> Add a Comment </h4>
        <textarea onChange={this.handleChange} value={comment} />
        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  actions,
)(CommentBox);
