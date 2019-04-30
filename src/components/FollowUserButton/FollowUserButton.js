import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';

import Colors from '../../constants/Colors';

const FollowUserButton = ({
  following,
  onFollow,
  onUnfollow,
}) => (
  following ? (
    <Button
      mode="contained"
      color={Colors.followButton}
      onPress={onUnfollow}
    >
      取消跟隨
    </Button>
  ) : (
    <Button
      mode="outlined"
      color={Colors.followButton}
      onPress={onFollow}
    >
      跟隨
    </Button>
  )
);

FollowUserButton.propTypes = {
  following: PropTypes.bool,
  onFollow: PropTypes.func,
  onUnfollow: PropTypes.func,
};

FollowUserButton.defaultProps = {
  following: false,
  onFollow: () => {},
  onUnfollow: () => {},
};

export default FollowUserButton;
