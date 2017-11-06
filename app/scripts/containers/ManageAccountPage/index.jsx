import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import { ActionTypes } from 'constants/index';
import { fetchPopularRepos } from 'actions';

import Loader from 'components/Loader';
import ManageAccount from '../../components/ManageAccount/index';

export class ManageAccountPage extends React.PureComponent {
  render() {
    return (
      <div key="ManageAccountPage">
        <div>
          <h2>ManageAccountPage</h2>
        </div>
        <div>
          <ManageAccount />
        </div>
      </div>
    );
  }
}

export default connect()(ManageAccountPage);
