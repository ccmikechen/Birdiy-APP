import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-native-image-gallery';

const ImageSlider = ({ images }) => {
  const imageDataSource = images.map(image => ({
    source: {
      uri: image,
    },
  }));

  return (
    <Gallery images={imageDataSource} />
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;
