import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import UserFavoritesScene from '../components/UserFavoritesScene';

const UserFavoritesSceneFragmentContainer = (props) => {
  const { profile } = props;

  return (
    <UserFavoritesScene
      {...props}
      projects={profile.favoriteProjects.edges.map(({ node }) => node)}
    />
  );
};

UserFavoritesSceneFragmentContainer.propTypes = {
  profile: PropTypes.shape({
    favoriteProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.object.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default createFragmentContainer(
  UserFavoritesSceneFragmentContainer,
  graphql`
    fragment UserFavoritesScene_profile on Profile {
      favoriteProjects(
        first: $count,
      ) @connection(key: "UserProjectsScene_favoriteProjects") {
        edges {
          node {
            id
            image
            name
            author {
              name 
            }
          }
        }
      }
    }
  `,
);
