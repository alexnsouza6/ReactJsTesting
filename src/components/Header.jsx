import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeAuth } from './actions/index';

class Header extends Component {
  renderButton = ({ auth, changeAuth }) => {
    if (auth) {
      return (
        <button type="submit" onClick={() => changeAuth(false)}>
          Sign Out
        </button>
      );
    }
    return (
      <button type="submit" onClick={() => changeAuth(true)}>
        Sign In
      </button>
    );
  };

  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post"> Post a Comment </Link>
        </li>
        <li>{this.renderButton(this.props)}</li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { changeAuth },
)(Header);
