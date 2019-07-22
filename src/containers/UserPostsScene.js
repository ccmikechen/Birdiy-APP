import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import UserPostsScene from '../components/UserPostsScene';

const UserPostsSceneFragmentContainer = (props) => {
  const { profile } = props;

  return (
    <UserPostsScene
      {...props}
      posts={profile.posts.edges.map(({ node }) => node)}
    />
  );
};

UserPostsSceneFragmentContainer.propTypes = {
  profile: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.object.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default createFragmentContainer(
  UserPostsSceneFragmentContainer,
  graphql`
    fragment UserPostsScene_profile on Profile {
      posts(
        first: $count,
      ) @connection(key: "UserPostsScene_posts") {
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
    }
  `,
);
