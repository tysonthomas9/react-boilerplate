import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Header from 'components/Header';

export class Login extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  render() {
    return (
      <div key="login" className="app__login app__route">
        <div className="app__container">
          <Header dispatch={this.props.dispatch} user={this.props.user} />
          <h1>{`You must login to view ${this.state ? `the page at ${this.state.from}` : 'this page'}`}</h1>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Login);
