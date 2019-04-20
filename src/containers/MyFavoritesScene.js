import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import MyFavoritesScene from '../components/MyFavoritesScene';

const MyFavoritesSceneFragmentContainer = (props) => {
  const { projects } = props;

  return (
    <MyFavoritesScene
      {...props}
      projects={projects.edges.map(({ node }) => node)}
    />
  );
};

MyFavoritesSceneFragmentContainer.propTypes = {
  projects: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.object.isRequired,
    })).isRequired,
  }).isRequired,
};

export default createFragmentContainer(
  MyFavoritesSceneFragmentContainer,
  graphql`
    fragment MyFavoritesScene_projects on ProjectConnection {
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
