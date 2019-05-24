import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

const TimelineHeader = ({ onSearch }) => (
  <BasicHeader
    placement="center"
    centerComponent={() => (
      <SearchBarButton onPress={onSearch} />
    )}
  />
);

TimelineHeader.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default TimelineHeader;
