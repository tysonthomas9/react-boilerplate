import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import { ActionTypes } from 'constants/index';
import { fetchPopularRepos } from 'actions';

import Loader from 'components/Loader';
import Devices from '../../components/Devices/index';
import SignUp from '../../components/SignUp/index';

export class DevicesPage extends React.PureComponent {
  render() {
    return (
      <div key="ManageAccountPage">
        <div>
          <h2>SignUp</h2>
        </div>
        <div>
          <SignUp />
        </div>
      </div>
    );
  }
}

export default connect()(DevicesPage);
