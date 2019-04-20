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
      name: PropTypes.string,
      image: PropTypes.string,
      followerCount: PropTypes.number,
      projectCount: PropTypes.number,
    }),
  }).isRequired,
};

export default createFragmentContainer(
  ProjectAuthorFragmentContainer,
  graphql`
    fragment ProjectAuthor_project on Project {
      author {
        name
        image
        followerCount
        projectCount
      }
    }
  `,
);
