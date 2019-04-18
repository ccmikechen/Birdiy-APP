import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import MyProjectsScene from '../components/MyProjectsScene';

const MyProjectsSceneFragmentContainer = (props) => {
  const { projects } = props;

  return (
    <MyProjectsScene
      {...props}
      projects={projects.edges.map(({ node }) => node)}
    />
  );
};

MyProjectsSceneFragmentContainer.propTypes = {
  projects: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.object.isRequired,
    })).isRequired,
  }).isRequired,
};

export default createFragmentContainer(
  MyProjectsSceneFragmentContainer,
  graphql`
    fragment MyProjectsScene_projects on ProjectConnection {
      edges {
        node {
          name
          image
        }
      }
    }
  `,
);
