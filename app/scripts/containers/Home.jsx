import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import List, {
  ListItem,
  ListItemText
} from 'material-ui/List';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';

import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/NotFound';
import Private from 'containers/Private';
import ManageAccountPage from '../containers/ManageAccountPage/index';
import DevicesPage from '../containers/DevicesPage/index';
import SignUpPage from '../containers/SignUpPage/index';
import EditAccountPage from '../containers/EditAccountPage/index';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawer: {
    height: '100%',
  },
  drawerHeader: {
    minHeight: theme.mixins.toolbar.minHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '16px',
    [theme.breakpoints.up('md')]: {
      padding: '20px',
    },
  },
  drawerPaper: {
    width: 250,
    height: '100vh',
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100vh',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    overflow: 'auto',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  listContainer: {
    display: 'flex',
    aignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 'calc(100% - 56px)',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
    },
  },
});

class Home extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div className={classes.drawer}>
        <div className={classes.drawerHeader}>
          <Typography type="title" color="inherit" noWrap>
            IOT
          </Typography>
        </div>
        <Divider />
        <div className={classes.listContainer}>
          <div>
            <List>
              <ListItem button>
                <ListItemText
                  primary="Dashboard"
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Applications"
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Devices"
                />
              </ListItem>
            </List>
            <Divider />
          </div>
          <div>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText
                  primary="Settings"
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Logout"
                />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onRequestClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <Switch>
              <Route path="/dashboard" component={Private} />
              <Route path="/manage-account" component={ManageAccountPage} />
              <Route path="/devices" component={DevicesPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/edit-account" component={EditAccountPage} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles, { withTheme: true })(Home));
