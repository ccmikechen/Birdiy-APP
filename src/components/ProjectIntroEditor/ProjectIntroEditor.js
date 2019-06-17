import React from 'react';
import PropTypes from 'prop-types';
import InputScrollView from 'react-native-input-scroll-view';
import i18n from 'i18n-js';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import PureSelector from '../PureSelector';

import styles from './styles';

const i18nOptions = { scope: 'project.edit' };

const ProjectIntroEditor = (props) => {
  const {
    project,
    onSelectTopicPress,
    onChange,
    errors,
    touched,
  } = props;
  const {
    name, introduction, topic, video,
  } = project;

  const error = {
    name: touched.name && errors.name,
    topic: touched.topic && errors.topic,
    introduction: touched.introduction && errors.introduction,
    video: touched.video && errors.video,
  };

  return (
    <InputScrollView
      style={styles.container}
      keyboardOffset={100}
      keyboardShouldPersistTaps="always"
      keyboardAvoidingViewProps={{
        behavior: 'padding',
      }}
      contentContainerStyle={styles.contentContainer}
    >
      <EditSection
        title={i18n.t('projectName.title', i18nOptions)}
        error={error.name}
      >
        <PureTextInput
          style={styles.textInput}
          value={name}
          error={error.name}
          placeholder={i18n.t('projectName.placeholder', i18nOptions)}
          onChangeText={onChange('name')}
          maxLength={100}
          multiline
          counter
        />
      </EditSection>
      <EditSection
        title={i18n.t('topic.title', i18nOptions)}
        error={error.topic}
      >
        <PureSelector
          style={styles.textInput}
          placeholder={i18n.t('topic.placeholder', i18nOptions)}
          value={topic && i18n.t(`topics.${topic}`, { defaultValue: topic })}
          error={error.topic}
          onPress={() => onSelectTopicPress(topic, (selected) => {
            onChange('topic')(selected);
          })}
        />
      </EditSection>
      <EditSection
        title={i18n.t('intro.title', i18nOptions)}
        error={error.introduction}
      >
        <PureTextInput
          style={styles.textInput}
          value={introduction}
          error={error.introduction}
          placeholder={i18n.t('intro.placeholder', i18nOptions)}
          onChangeText={onChange('introduction')}
          maxLength={300}
          multiline
          counter
        />
      </EditSection>
      <EditSection
        title={i18n.t('video.title', i18nOptions)}
        error={error.video}
      >
        <PureTextInput
          style={styles.textInput}
          value={video}
          error={error.video}
          placeholder={i18n.t('video.placeholder', i18nOptions)}
          onChangeText={onChange('video')}
        />
      </EditSection>
    </InputScrollView>
  );
};

ProjectIntroEditor.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    introduction: PropTypes.string,
    topic: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSelectTopicPress: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    introduction: PropTypes.string,
    topic: PropTypes.string,
    video: PropTypes.string,
  }),
  touched: PropTypes.shape({
    name: PropTypes.bool,
    introduction: PropTypes.bool,
    topic: PropTypes.bool,
  }),
};

ProjectIntroEditor.defaultProps = {
  errors: {},
  touched: {},
};

export default ProjectIntroEditor;
