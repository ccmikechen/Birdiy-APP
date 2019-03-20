import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';

import Colors from '../../constants/Colors';

const ProfileHeader = ({
  onOpenDrawer,
  onOpenSettings,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'menu',
      color: Colors.headerIcon,
      onPress: onOpenDrawer,
    }}
    centerComponent={{
      title: '我的工作坊',
      style: { fontSize: 20 },
    }}
    rightButton={{
      icon: 'settings',
      color: Colors.headerIcon,
      onPress: onOpenSettings,
    }}
  />
);

ProfileHeader.propTypes = {
  onOpenDrawer: PropTypes.func.isRequired,
  onOpenSettings: PropTypes.func.isRequired,
};

export default ProfileHeader;
