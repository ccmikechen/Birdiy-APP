import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

import Colors from '../../constants/Colors';

const ProfileHeader = ({
  onOpenDrawer,
  onSearch,
  onOpenSettings,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'menu',
      color: Colors.headerIcon,
      onPress: onOpenDrawer,
    }}
    centerComponent={() => (
      <SearchBarButton onPress={onSearch} />
    )}
    rightButton={{
      icon: 'settings',
      color: Colors.headerIcon,
      onPress: onOpenSettings,
    }}
  />
);

ProfileHeader.propTypes = {
  onOpenDrawer: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onOpenSettings: PropTypes.func.isRequired,
};

export default ProfileHeader;
