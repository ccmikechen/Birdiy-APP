import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Button } from 'react-native-paper';

import { DEFAULT_PROFILE } from '../../images';

import styles from './styles';

const ProjectAuthor = ({
  author,
  onUserPress,
  onFollowPress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.userImageContainer}
      onPress={onUserPress}
    >
      <Image
        style={styles.userImage}
        source={{ uri: author.image }}
        defaultSource={DEFAULT_PROFILE}
      />
    </TouchableOpacity>
    <View style={styles.infoContainer}>
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>
          {author.name}
        </Text>
      </View>
      <View style={styles.statisticsContainer}>
        <Text style={styles.statistics}>
          {`${author.amountOfProjects} 專案．${author.followed} 跟隨`}
        </Text>
      </View>
    </View>
    <View>
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
);

ProjectAuthor.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    followed: PropTypes.number.isRequired,
    amountOfProjects: PropTypes.number.isRequired,
  }).isRequired,
  onUserPress: PropTypes.func,
  onFollowPress: PropTypes.func,
};

ProjectAuthor.defaultProps = {
  onUserPress: () => {},
  onFollowPress: () => {},
};

export default ProjectAuthor;
