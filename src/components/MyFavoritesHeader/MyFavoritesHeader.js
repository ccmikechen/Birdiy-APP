import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';

const MyFavoritesHeader = ({ onBack, onOpenFilter }) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'arrow-back',
      onPress: onBack,
    }}
    centerComponent={{
      title: '我的收藏',
      style: { fontSize: 20 },
    }}
    rightButton={{
      icon: 'filter-list',
      onPress: onOpenFilter,
    }}
  />
);

MyFavoritesHeader.propTypes = {
  onBack: PropTypes.func.isRequired,
  onOpenFilter: PropTypes.func.isRequired,
};

export default MyFavoritesHeader;