import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import i18n from 'i18n-js';

import styles from './styles';

const MethodListItem = ({ method, order }) => (
  <View style={styles.container}>
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
        {method.title ? (
          i18n.t('project.sections.methods.stepWithTitle', {
            step: order,
            title: method.title,
          })
        ) : (
          i18n.t('project.sections.methods.step', { step: order })
        )}
      </Text>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.content}>
        {method.content}
      </Text>
    </View>
  </View>
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
