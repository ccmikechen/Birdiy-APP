import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import Slideshow from 'react-native-image-slider-show';

const ImageSlider = ({ images }) => {
  const imageDataSource = images.map(image => ({
    url: image,
  }));

  return (
    <Slideshow
      dataSource={imageDataSource}
      height={Dimensions.get('window').width}
    />
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;
