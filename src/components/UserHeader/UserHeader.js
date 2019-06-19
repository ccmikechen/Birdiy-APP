import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

import Colors, { Primary } from '../../constants/Colors';

const UserHeader = ({
  onBack,
  onSearch,
  onFollowUser,
  onUnfollowUser,
  following,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'arrow-back',
      onPress: onBack,
    }}
    centerComponent={() => (
      <SearchBarButton onPress={onSearch} />
    )}
    rightButton={{
      icon: following ? (
        <Icon.Feather
          name="user-check"
          size={30}
          color={Primary(700)}
        />
      ) : (
        <Icon.Feather
          name="user-plus"
          size={30}
          color={Colors.headerIcon}
        />
      ),
      onPress: following ? onUnfollowUser : onFollowUser,
    }}
  />
);

UserHeader.propTypes = {
  onBack: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onFollowUser: PropTypes.func.isRequired,
  onUnfollowUser: PropTypes.func.isRequired,
  following: PropTypes.bool.isRequired,
};

export default UserHeader;
