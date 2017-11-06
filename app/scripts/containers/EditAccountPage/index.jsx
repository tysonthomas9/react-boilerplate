import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import { ActionTypes } from 'constants/index';
import { fetchPopularRepos } from 'actions';

import Loader from 'components/Loader';
import Devices from '../../components/Devices/index';
import EditAccount from '../../components/EditAccount/index';

export class EditAccountPage extends React.PureComponent {
  render() {
    return (
      <div key="EditAccountPage">
        <div>
          <h2>EditAccount</h2>
        </div>
        <div>
          <EditAccount />
        </div>
      </div>
    );
  }
}

export default connect()(EditAccountPage);
