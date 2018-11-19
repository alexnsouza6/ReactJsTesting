import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveComment, fetchComment } from './actions/index';

class CommentBox extends Component {
  static propTypes = {
    saveComment: PropTypes.func.isRequired,
    fetchComment: PropTypes.func.isRequired,
  };

  state = { comment: '' };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    const { comment } = this.state;
    event.preventDefault();
    this.props.saveComment(comment);
    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;
    const { fetchComment } = this.props;

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4> Add a Comment </h4>
          <textarea onChange={this.handleChange} value={comment} />
          <div>
            <button type="submit"> Submit </button>
          </div>
        </form>
        <div>
          <button type="submit" className="fetch-comments" onClick={() => fetchComment()}>
            Fetch Comments
          </button>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { saveComment, fetchComment },
)(CommentBox);
