import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.accessPermission();
    }

    componentDidUpdate() {
      this.accessPermission();
    }

    accessPermission = () => {
      const { auth, history } = this.props;
      if (!auth) {
        history.push('/');
      }
    };

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth,
  });

  return connect(mapStateToProps)(ComposedComponent);
};
