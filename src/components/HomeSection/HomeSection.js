import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

const HomeSection = ({
  title,
  renderContent,
}) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.contentContainer}>
      {renderContent()}
    </View>
  </View>
);

HomeSection.propTypes = {
  title: PropTypes.string.isRequired,
  renderContent: PropTypes.func.isRequired,
};

export default HomeSection;
