import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import UserProjectsScene from '../components/UserProjectsScene';

const UserProjectsSceneFragmentContainer = (props) => {
  const { profile } = props;

  return (
    <UserProjectsScene
      {...props}
      projects={profile.projects.edges.map(({ node }) => node)}
    />
  );
};

UserProjectsSceneFragmentContainer.propTypes = {
  profile: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.object.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default createFragmentContainer(
  UserProjectsSceneFragmentContainer,
  graphql`
    fragment UserProjectsScene_profile on Profile {
      projects(
        first: $count,
      ) @connection(key: "UserProjectsScene_projects") {
        edges {
          node {
            id
            name
            image
            published
          }
        }
      }
    }
  `,
);
