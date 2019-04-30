import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import ProjectAuthor from '../components/ProjectAuthor';

const ProjectAuthorFragmentContainer = (props) => {
  const { project } = props;

  return (
    <ProjectAuthor
      {...props}
      author={project.author}
    />
  );
};

ProjectAuthorFragmentContainer.propTypes = {
  project: PropTypes.shape({
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      following: PropTypes.bool.isRequired,
      followerCount: PropTypes.number.isRequired,
      projectCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default createFragmentContainer(
  ProjectAuthorFragmentContainer,
  graphql`
    fragment ProjectAuthor_project on Project {
      author {
        id
        name
        image
        following
        followerCount
        projectCount
      }
    }
  `,
);
