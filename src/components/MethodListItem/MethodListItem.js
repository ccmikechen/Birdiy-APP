import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { Surface } from 'react-native-paper';

import styles from './styles';

const MethodListItem = ({ method, order }) => (
  <Surface style={styles.container}>
    {method.image && (
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: method.image }}
        />
      </View>
    )}
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {`步驟${order}${method.title ? `: ${method.title}` : ''}`}
      </Text>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.content}>
        {method.content}
      </Text>
    </View>
  </Surface>
);

MethodListItem.propTypes = {
  method: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  order: PropTypes.number.isRequired,
};

export default MethodListItem;
