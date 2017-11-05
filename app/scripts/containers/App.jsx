import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Router from 'modules/ReduxRouter';
import RedirectPublic from 'modules/RedirectPublic';
import RedirectProtected from 'modules/RedirectProtected';

import Home from 'containers/Home';
import Login from 'containers/Login';
import NotFound from 'containers/NotFound';

import Loader from 'components/Loader';
import SystemNotifications from 'components/SystemNotifications';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import styles from './styles.css';

const theme = createMuiTheme();

export class App extends React.Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };

  render() {
    const { app, dispatch, router, user } = this.props;
    let html = (<Loader />);

    if (app.rehydrated) {
      html = (
        <Router dispatch={dispatch} router={router}>
          <MuiThemeProvider theme={theme}>
            <div key="app" className="app">
              <main className="app__main">
                <Switch>
                  <RedirectPublic
                    component={Login}
                    isAuthenticated={user.isAuthenticated}
                    path="/login"
                    exact
                  />
                  <RedirectProtected
                    component={Home}
                    isAuthenticated={user.isAuthenticated}
                    path="/"
                  />
                  <Route component={NotFound} />
                </Switch>
              </main>
              <SystemNotifications dispatch={dispatch} app={app} />
            </div>
          </MuiThemeProvider>
        </Router>
      );
    }

    return html;
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    app: state.app,
    router: state.router,
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
