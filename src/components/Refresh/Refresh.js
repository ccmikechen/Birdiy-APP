import React from 'react';
import PropTypes from 'prop-types';
import { RefreshControl } from 'react-native';

import Size from '../../constants/Size';
import { Primary } from '../../constants/Colors';

const Refresh = props => (
  <RefreshControl
    {...props}
    progressViewOffset={Size.headerHeight}
    colors={[Primary(500)]}
  />
);

Refresh.propTypes = {
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default Refresh;