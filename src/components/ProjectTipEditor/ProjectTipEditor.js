import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

export default class ProjectTipEditor extends Component {
  static propTypes = {
    project: PropTypes.shape({
      tip: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleTipChange = (tip) => {
    const { project, onChange } = this.props;
    onChange({ ...project, tip });
  };

  render() {
    const { project } = this.props;
    const { tip } = project;

    return (
      <InputScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardAvoidingViewProps={{
          behavior: 'padding',
        }}
        contentContainerStyle={styles.contentContainer}
      >
        <EditSection title={i18n.t('tip.title', i18nOptions)}>
          <PureTextInput
            style={styles.textInput}
            value={tip}
            placeholder={i18n.t('tip.placeholder', i18nOptions)}
            onChangeText={this.handleTipChange}
            maxLength={300}
            multiline
            counter
          />
        </EditSection>
      </InputScrollView>
    );
  }
}