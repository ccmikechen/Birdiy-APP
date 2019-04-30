import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';

const FollowUserButton = ({
  following,
  onFollow,
  onUnfollow,
}) => (
  following ? (
    <Button
      icon="add"
      mode="contained"
      color="#222222"
      onPress={onUnfollow}
    >
      取消跟隨
    </Button>
  ) : (
    <Button
      icon="add"
      mode="outlined"
      color="#222222"
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
