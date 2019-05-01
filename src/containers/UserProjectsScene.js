import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import UserProjectsScene from '../components/UserProjectsScene';

const UserProjectsSceneFragmentContainer = (props) => {
  const { projects } = props;

  return (
    <UserProjectsScene
      {...props}
      projects={projects.edges.map(({ node }) => node)}
    />
  );
};

UserProjectsSceneFragmentContainer.propTypes = {
  projects: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.object.isRequired,
    })).isRequired,
  }).isRequired,
};

export default createFragmentContainer(
  UserProjectsSceneFragmentContainer,
  graphql`
    fragment UserProjectsScene_projects on ProjectConnection {
      edges {
        node {
          id
          name
          image
          published
        }
      }
    }
  `,
);
