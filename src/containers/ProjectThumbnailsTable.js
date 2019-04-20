import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import ProjectThumbnailsTable from '../components/ProjectThumbnailsTable';

const ProjectThumbnailsFragmentContainer = (props) => {
  const { query } = props;
  const projects = query.projects.edges.map(({ node }) => node);

  return (
    <ProjectThumbnailsTable
      {...props}
      projects={projects}
    />
  );
};

ProjectThumbnailsFragmentContainer.propTypes = {
  query: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.object,
      })),
    }),
  }).isRequired,
};

export default createFragmentContainer(
  ProjectThumbnailsFragmentContainer,
  graphql`
    fragment ProjectThumbnailsTable_query on RootQueryType {
      projects: allProjects(
        first: $newProjectCount 
      ) {
        edges {
          node {
            ...ProjectSection_project
          }
        }
      }
    }
  `,
);
