import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import UserPostsScene from '../components/UserPostsScene';

const UserPostsSceneFragmentContainer = (props) => {
  const { posts } = props;

  return (
    <UserPostsScene
      {...props}
      posts={posts.edges.map(({ node }) => node)}
    />
  );
};

UserPostsSceneFragmentContainer.propTypes = {
  posts: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.object.isRequired,
    })).isRequired,
  }).isRequired,
};

export default createFragmentContainer(
  UserPostsSceneFragmentContainer,
  graphql`
    fragment UserPostsScene_posts on PostConnection {
      edges {
        node {
          id
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
