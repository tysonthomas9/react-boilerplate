import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SVG from 'react-inlinesvg';

import config from 'config';

import Logo from 'components/Logo';
import styles from './styles.css';

export class Home extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div key="Home" className="app__home app__route">
        <div className={styles.home}>
          Test
        </div>
      </div>
    );
  }
}

export default connect()(Home);
