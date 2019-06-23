import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import * as Icon from '@expo/vector-icons';

import LoadingIndicator from '../LoadingIndicator';

import styles from './styles';

const ImageView = ({
  style, width, uri, amount,
}) => (
  uri ? (
    <View style={styles.imageContainer}>
      <AutoHeightImage
        style={style}
        source={{ uri }}
        width={width}
        PlaceholderContent={(
          <View style={[styles.loadingContainer, { height: width }]}>
            <LoadingIndicator />
          </View>
)}
      />
      {amount > 1 && (
        <View style={styles.imagesInfoContainer}>
          <Icon.Ionicons
            name="md-images"
            size={32}
            color="#ffffff"
          />
          <View style={styles.imagesAmountContainer}>
            <Text style={styles.imagesAmount}>
              {amount}
            </Text>
          </View>
        </View>
      )}
    </View>
  ) : (
    <View style={[style, styles.defaultImage, { width, height: width }]}>
      <Icon.MaterialCommunityIcons
        name="image-filter"
        size={width / 3}
        color="#ffffff"
      />
    </View>
  )
);

ImageView.propTypes = {
  style: ViewPropTypes.style,
  width: PropTypes.number.isRequired,
  uri: PropTypes.string,
  amount: PropTypes.number,
};


ImageView.defaultProps = {
  style: {},
  uri: null,
  amount: 1,
};

export default ImageView;
