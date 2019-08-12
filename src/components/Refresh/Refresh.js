import React from 'react';
import PropTypes from 'prop-types';
import { RefreshControl } from 'react-native';

import { Secondary } from '../../constants/Colors';

const Refresh = props => (
  <RefreshControl
    {...props}
    colors={[Secondary(500)]}
  />
);

Refresh.propTypes = {
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default Refresh;
