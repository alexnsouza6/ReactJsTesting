import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.node.isRequired,
  };

  state = {};

  renderComments = () => {
    const { comments } = this.props;
    comments.map(comment => <li key={comment}>{comment.title}</li>);
  };

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ comments: state.comments });

export default connect(mapStateToProps)(CommentList);
