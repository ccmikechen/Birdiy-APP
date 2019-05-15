import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import i18n from 'i18n-js';

import Colors from '../../constants/Colors';

const i18nOptions = { scope: 'followUserActions' };

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
      {i18n.t('unfollow', i18nOptions)}
    </Button>
  ) : (
    <Button
      mode="outlined"
      color={Colors.followButton}
      onPress={onFollow}
    >
      {i18n.t('follow', i18nOptions)}
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
