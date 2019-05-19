import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import EditMaterialList from '../EditMaterialList';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

export default class ProjectMaterialEditor extends Component {
  static propTypes = {
    project: PropTypes.shape({
      methods: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
      })),
    }).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleMaterialChange = (materials) => {
    const { project, onChange } = this.props;
    onChange({ ...project, materials });
  };

  render() {
    const { project } = this.props;
    const { materials } = project;

    return (
      <InputScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardAvoidingViewProps={{
          behavior: 'padding',
        }}
        contentContainerStyle={styles.contentContainer}
      >
        <EditSection title={i18n.t('materials.title', i18nOptions)}>
          <EditMaterialList
            data={materials}
            onChange={this.handleMaterialChange}
          />
        </EditSection>
      </InputScrollView>
    );
  }
}
