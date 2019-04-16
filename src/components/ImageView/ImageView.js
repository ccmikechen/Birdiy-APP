import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { Icon } from 'expo';

import styles from './styles';

const ImageView = ({ style, width, uri }) => (
  uri ? (
    <AutoHeightImage
      style={style}
      source={{ uri }}
      width={width}
    />
  ) : (
    <View style={[style, styles.defaultImage, { height: width * 3 / 4 }]}>
      <Icon.MaterialCommunityIcons
        name="image-filter"
        size={width / 5}
        color="#ffffff"
      />
    </View>
  )
);

ImageView.propTypes = {
  style: ViewPropTypes.style,
  width: PropTypes.number.isRequired,
  uri: PropTypes.string,
};


ImageView.defaultProps = {
  style: {},
  uri: null,
};

export default ImageView;
