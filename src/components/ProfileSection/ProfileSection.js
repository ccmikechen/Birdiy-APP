import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import i18n from 'i18n-js';

import Avatar from '../Avatar';

import Size from '../../constants/Size';

import styles from './styles';

const ProfileSection = ({
  profile,
  onAvatarPress,
  onNamePress,
  onFollowerPress,
  onFollowingPress,
}) => (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <Avatar
        image={profile.image}
        size={Size.profileImageSize}
        borderRadius={Size.profileImageSize / 2}
        onPress={onAvatarPress}
      />
    </View>
    <View style={styles.profileContainer}>
      <TouchableOpacity
        style={styles.nameContainer}
        onPress={onNamePress}
      >
        <Text style={styles.name}>
          {profile.name}
        </Text>
      </TouchableOpacity>
      <View style={styles.followStatusContainer}>
        <TouchableOpacity
          style={styles.followingContainer}
          onPress={onFollowingPress}
        >
          <Text style={styles.followingNumber}>
            {profile.followingCount}
          </Text>
          <Text style={styles.following}>
            {i18n.t('profile.following')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.followingContainer}
          onPress={onFollowerPress}
        >
          <Text style={styles.followingNumber}>
            {profile.followerCount}
          </Text>
          <Text style={styles.following}>
            {i18n.t('profile.follower')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

ProfileSection.propTypes = {
  profile: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    followerCount: PropTypes.number.isRequired,
    followingCount: PropTypes.number.isRequired,
  }).isRequired,
  onAvatarPress: PropTypes.func,
  onNamePress: PropTypes.func,
  onFollowerPress: PropTypes.func,
  onFollowingPress: PropTypes.func,
};

ProfileSection.defaultProps = {
  onAvatarPress: () => {},
  onNamePress: () => {},
  onFollowerPress: () => {},
  onFollowingPress: () => {},
};

export default ProfileSection;
