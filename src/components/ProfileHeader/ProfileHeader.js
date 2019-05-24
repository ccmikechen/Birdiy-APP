import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

import Colors from '../../constants/Colors';

const ProfileHeader = ({
  onSearch,
  onOpenSettings,
}) => (
  <BasicHeader
    placement="center"
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
  onSearch: PropTypes.func.isRequired,
  onOpenSettings: PropTypes.func.isRequired,
};

export default ProfileHeader;
