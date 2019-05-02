import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import ImageSlider from '../components/ImageSlider';

const PostImageSliderFragmentContainer = (props) => {
  const { post } = props;
  const images = post.photos.map(({ image }) => image);

  return (
    <ImageSlider
      {...props}
      images={images}
    />
  );
};

PostImageSliderFragmentContainer.propTypes = {
  post: PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default createFragmentContainer(
  PostImageSliderFragmentContainer,
  graphql`
    fragment PostImageSlider_post on Post {
      photos {
        image
      }
    }
  `,
);
