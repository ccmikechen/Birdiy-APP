import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import MyPostsScene from '../components/MyPostsScene';

const MyPostsSceneFragmentContainer = (props) => {
  const { posts } = props;

  return (
    <MyPostsScene
      {...props}
      posts={posts.edges.map(({ node }) => node)}
    />
  );
};

MyPostsSceneFragmentContainer.propTypes = {
  posts: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.object.isRequired,
    })).isRequired,
  }).isRequired,
};

export default createFragmentContainer(
  MyPostsSceneFragmentContainer,
  graphql`
    fragment MyPostsScene_posts on PostConnection {
      edges {
        node {
          thumbnail {
            image 
          }
          message
          insertedAt
        }
      }
    }
  `,
);
