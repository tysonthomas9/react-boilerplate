import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import { ActionTypes } from 'constants/index';
import { fetchPopularRepos } from 'actions';

import Loader from 'components/Loader';
import ContainersView from '../../components/ContainersView/index';

export class ContainersViewPage extends React.PureComponent {
  render() {
    return (
      <div key="ContainersViewPage">
        <div>
          <h2>Containers View</h2>
        </div>
        <div>
          <ContainersView />
        </div>
      </div>
    );
  }
}

export default connect()(ContainersViewPage);
