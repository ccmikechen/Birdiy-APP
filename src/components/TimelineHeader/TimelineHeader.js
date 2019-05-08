import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

const TimelineHeader = ({
  onOpenDrawer,
  onSearch,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'menu',
      onPress: onOpenDrawer,
    }}
    centerComponent={() => (
      <SearchBarButton onPress={onSearch} />
    )}
  />
);

TimelineHeader.propTypes = {
  onOpenDrawer: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default TimelineHeader;
