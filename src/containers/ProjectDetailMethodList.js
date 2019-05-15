import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';
import i18n from 'i18n-js';

import ProjectDetailSection from '../components/ProjectDetailSection';
import MethodList from '../components/MethodList';

const ProjectDetailMethodList = (props) => {
  const { project } = props;

  return project.methods.length === 0 ? null : (
    <ProjectDetailSection title={i18n.t('project.sections.methods.title')}>
      <MethodList
        {...props}
        methods={project.methods}
      />
    </ProjectDetailSection>
  );
};

ProjectDetailMethodList.propTypes = {
  project: PropTypes.shape({
    methods: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    })),
  }).isRequired,
};

export default createFragmentContainer(
  ProjectDetailMethodList,
  graphql`
    fragment ProjectDetailMethodList_project on Project {
      methods {
        image
        title
        content 
      }
    }
  `,
);
