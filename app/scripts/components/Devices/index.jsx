import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import { ActionTypes } from 'constants/index';
import { fetchPopularRepos } from 'actions';

import Loader from 'components/Loader';
/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable react/no-multi-comp */

import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import styles1 from './styles1.css';

function TabContainer({ children, dir }) {
  return (
    <div dir={dir} style={{ padding: 8 * 2 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

class Devices extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root} style={{ width: 400 }}>
        <AppBar position="relative" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Devices View" />
            <Tab label="Stack View" />

          </Tabs>
        </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
          <TabContainer dir={theme.direction}>
            Item One
            <div className={styles1.sidebar}>
              <div className={styles1.header}>Heading</div>
              <div className={styles1.sidebar__content}>Content of a sidebar
                <div className={styles1.header}>Heading</div>
                <div className={styles1.sidebar__content}>Content of a sidebar</div>
              </div>
            </div>
          </TabContainer>

          <TabContainer dir={theme.direction}>Item Two
            <div className={styles1.sidebar}>
              <div className={styles1.header}>Heading</div>
              <div className={styles1.sidebar__content}>Content of a sidebar
                <div className={styles1.header}>Heading</div>
                <div className={styles1.sidebar__content}>Content of a sidebar</div>
              </div>
            </div>
          </TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Devices.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Devices);
