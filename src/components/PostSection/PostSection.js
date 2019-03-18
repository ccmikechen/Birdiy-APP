import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';

import { DEFAULT_PROFILE } from '../../images';

import styles from './styles';

const PostSection = ({
  post: {
    user,
    postedAt,
    message,
    image,
    source,
  },
  onUserPress,
  onFollowPress,
  onPostPress,
  onSourcePress,
}) => (
  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <TouchableOpacity
        style={styles.userImageContainer}
        onPress={onUserPress}
      >
        <Image
          style={styles.userImage}
          source={{ uri: user.image }}
          defaultSource={DEFAULT_PROFILE}
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>
            {user.name}
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {postedAt}
          </Text>
        </View>
      </View>
      <View style={styles.followButtonContainer}>
        <Button
          icon="add"
          mode="outlined"
          color="#222222"
          onPress={onFollowPress}
        >
          跟隨
        </Button>
      </View>
    </View>
    <TouchableOpacity
      style={styles.messageContainer}
      onPress={onPostPress}
    >
      <Text style={styles.message}>
        {message}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={onPostPress}
    >
      <AutoHeightImage
        style={styles.image}
        source={{ uri: image }}
        width={Dimensions.get('window').width - 20}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.sourceContainer}
      onPress={onSourcePress}
    >
      <Text style={styles.source}>
        {source}
      </Text>
    </TouchableOpacity>
  </View>
);

PostSection.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    postedAt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
  onUserPress: PropTypes.func,
  onFollowPress: PropTypes.func,
  onPostPress: PropTypes.func,
  onSourcePress: PropTypes.func,
};

PostSection.defaultProps = {
  onUserPress: () => {},
  onFollowPress: () => {},
  onPostPress: () => {},
  onSourcePress: () => {},
};

export default PostSection;
