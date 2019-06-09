import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import ProjectThumbnailsTable from '../components/ProjectThumbnailsTable';

const ProjectThumbnailsFragmentContainer = (props) => {
  const { projects } = props;
  const projectNodes = projects.edges.map(({ node }) => node);

  return (
    <ProjectThumbnailsTable
      {...props}
      projects={projectNodes}
    />
  );
};

ProjectThumbnailsFragmentContainer.propTypes = {
  projects: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.object,
    })),
  }).isRequired,
};

export default createFragmentContainer(
  ProjectThumbnailsFragmentContainer,
  graphql`
    fragment ProjectThumbnailsTable_projects on ProjectConnection {
      edges {
        node {
          ...ProjectSection_project
        }
      }
    }
  `,
);
