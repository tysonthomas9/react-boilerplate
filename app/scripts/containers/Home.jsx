import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/NotFound';
import Private from 'containers/Private';
import styles from './styles.css';

export class Home extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={styles.title}>
              IOT
            </Typography>
            <Button color="contrast">Log Out</Button>
          </Toolbar>
        </AppBar>
        <div>
          <Switch>
            <Route path="/dashboard" component={Private} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
