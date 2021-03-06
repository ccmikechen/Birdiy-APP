import React from 'react';
import PropTypes from 'prop-types';
import { graphql, createFragmentContainer } from 'react-relay';
import i18n from 'i18n-js';

import ProjectDetailSection from '../components/ProjectDetailSection';
import MaterialList from '../components/MaterialList';

const ProjectDetailMaterialList = (props) => {
  const { project } = props;

  return project.materials.length === 0 ? null : (
    <ProjectDetailSection title={i18n.t('project.sections.materials')}>
      <MaterialList
        {...props}
        materials={project.materials}
      />
    </ProjectDetailSection>
  );
};

ProjectDetailMaterialList.propTypes = {
  project: PropTypes.shape({
    materials: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      amountUnit: PropTypes.string,
      url: PropTypes.string,
    })),
  }).isRequired,
};

export default createFragmentContainer(
  ProjectDetailMaterialList,
  graphql`
    fragment ProjectDetailMaterialList_project on Project {
      materials {
        id
        name
        amountUnit
        url 
      }
    }
  `,
);
