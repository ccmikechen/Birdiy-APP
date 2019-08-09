import React from 'react';
import PropTypes from 'prop-types';
import {
  View, ViewPropTypes, Text, Image,
} from 'react-native';
import * as Icon from '@expo/vector-icons';

import LoadingIndicator from '../LoadingIndicator';

import styles from './styles';

const ImageView = ({
  style, width, aspectRatio, uri, amount,
}) => (
  uri ? (
    <View style={styles.imageContainer}>
      <Image
        style={[style, { width, aspectRatio }]}
        source={{ uri }}
        PlaceholderContent={(
          <View style={[styles.loadingContainer, { width, aspectRatio }]}>
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
    <View style={[style, styles.defaultImage, { width, aspectRatio }]}>
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
  aspectRatio: PropTypes.number.isRequired,
  uri: PropTypes.string,
  amount: PropTypes.number,
};


ImageView.defaultProps = {
  style: {},
  uri: null,
  amount: 1,
};

export default ImageView;
