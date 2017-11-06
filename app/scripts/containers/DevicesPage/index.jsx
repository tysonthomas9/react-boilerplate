import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import { ActionTypes } from 'constants/index';
import { fetchPopularRepos } from 'actions';

import Loader from 'components/Loader';
import Devices from '../../components/Devices/index';

export class DevicesPage extends React.PureComponent {
  render() {
    return (
      <div key="ManageAccountPage">
        <div>
          <h2>DevicesPage</h2>
        </div>
        <div>
          <Devices />
        </div>
      </div>
    );
  }
}

export default connect()(DevicesPage);
