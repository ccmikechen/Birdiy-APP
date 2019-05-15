import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';

const RecentViewedHeader = ({ onBack, onSearch }) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'arrow-back',
      onPress: onBack,
    }}
    centerComponent={{
      title: '近期瀏覽',
      style: { fontSize: 20 },
    }}
    rightButton={{
      icon: 'search',
      onPress: onSearch,
    }}
  />
);

RecentViewedHeader.propTypes = {
  onBack: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default RecentViewedHeader;
