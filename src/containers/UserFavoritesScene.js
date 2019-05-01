import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import UserFavoritesScene from '../components/UserFavoritesScene';

const UserFavoritesSceneFragmentContainer = (props) => {
  const { projects } = props;

  return (
    <UserFavoritesScene
      {...props}
      projects={projects.edges.map(({ node }) => node)}
    />
  );
};

UserFavoritesSceneFragmentContainer.propTypes = {
  projects: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.object.isRequired,
    })).isRequired,
  }).isRequired,
};

export default createFragmentContainer(
  UserFavoritesSceneFragmentContainer,
  graphql`
    fragment UserFavoritesScene_projects on ProjectConnection {
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
  `,
);
