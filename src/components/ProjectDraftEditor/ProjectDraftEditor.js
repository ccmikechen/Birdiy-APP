import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-navigation';
import { Button } from 'react-native-paper';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import PureSelector from '../PureSelector';

import styles from './styles';

const ProjectDraftEditor = (props) => {
  const {
    project,
    onChange,
    onOpenCategorySelector,
    onSubmit,
  } = props;

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
    >
      <EditSection title="專案名稱">
        <PureTextInput
          style={styles.textInput}
          value={project.name}
          placeholder="輸入你的專案名稱"
          onChangeText={value => onChange({ name: value })}
          maxLength={20}
          counter
        />
      </EditSection>
      <EditSection title="分類">
        <PureSelector
          placeholder="選擇你的專案分類"
          value={project.category}
          onPress={onOpenCategorySelector}
        />
      </EditSection>
      <View style={styles.submitButtonContainer}>
        <Button
          style={styles.submitButton}
          mode="contained"
          onPress={onSubmit}
        >
          <Text style={styles.submitButtonText}>儲存並繼續編輯</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

ProjectDraftEditor.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func,
  onOpenCategorySelector: PropTypes.func,
  onSubmit: PropTypes.func,
};

ProjectDraftEditor.defaultProps = {
  onChange: () => {},
  onOpenCategorySelector: () => {},
  onSubmit: () => {},
};

export default ProjectDraftEditor;
