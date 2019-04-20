import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';

import styles from './styles';

const FileListItem = ({
  file,
  onLinkPress,
}) => (
  <View style={styles.container}>
    <View style={styles.nameContainer}>
      <Text style={styles.name}>
        {file.name}
      </Text>
    </View>
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => onLinkPress(file.url)}
        >
          <Icon.MaterialCommunityIcons
            name="file-download-outline"
            size={26}
            color={Colors.headerIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

FileListItem.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onLinkPress: PropTypes.func,
};

FileListItem.defaultProps = {
  onLinkPress: () => {},
};

export default FileListItem;
