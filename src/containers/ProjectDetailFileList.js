import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';
import i18n from 'i18n-js';

import ProjectDetailSection from '../components/ProjectDetailSection';
import FileList from '../components/FileList';

const ProjectDetailFileList = (props) => {
  const { project } = props;

  return project.fileResources.length === 0 ? null : (
    <ProjectDetailSection title={i18n.t('project.sections.files')}>
      <FileList
        {...props}
        files={project.fileResources}
      />
    </ProjectDetailSection>
  );
};

ProjectDetailFileList.propTypes = {
  project: PropTypes.shape({
    fileResources: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })),
  }).isRequired,
};

export default createFragmentContainer(
  ProjectDetailFileList,
  graphql`
    fragment ProjectDetailFileList_project on Project {
      fileResources {
        name
        url
      }
    }
  `,
);
