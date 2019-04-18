import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';

import ProjectThumbnailsTable from '../components/ProjectThumbnailsTable';

const ProjectThumbnailsFragmentComponent = (props) => {
  const { query } = props;
  const projects = query && query.projects.edges.map(({ node }) => node);

  return (
    <ProjectThumbnailsTable
      {...props}
      projects={projects}
    />
  );
};

ProjectThumbnailsFragmentComponent.propTypes = {
  query: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.object,
      })),
    }),
  }),
};

ProjectThumbnailsFragmentComponent.defaultProps = {
  query: null,
};

export default createFragmentContainer(
  ProjectThumbnailsFragmentComponent,
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
