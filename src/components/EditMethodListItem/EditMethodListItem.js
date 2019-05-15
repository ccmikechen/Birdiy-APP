import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'expo';
import { Surface } from 'react-native-paper';
import i18n from 'i18n-js';

import ImageUploadView from '../ImageUploadView';
import PureTextInput from '../PureTextInput';

import styles from './styles';

const i18nOptions = { scope: 'project.edit.methods' };

const EditMethodListItem = ({
  data,
  onImageUpload,
  onChange,
  onMoveUp,
  onMoveDown,
  onDelete,
}) => (
  <Surface style={styles.container}>
    <ImageUploadView
      width="100%"
      aspect={[4, 3]}
      iconSize={Dimensions.get('window').width / 2}
      image={data.image}
      onUpload={onImageUpload}
    />
    <View style={styles.titleContainer}>
      <PureTextInput
        value={data.title}
        placeholder={i18n.t('stepTitle', i18nOptions)}
        onChangeText={(value) => {
          onChange({ ...data, title: value });
        }}
      />
    </View>
    <View style={styles.contentContainer}>
      <PureTextInput
        value={data.content}
        placeholder={i18n.t('description', i18nOptions)}
        onChangeText={(value) => {
          onChange({ ...data, content: value });
        }}
        maxLength={500}
        multiline
        counter
      />
    </View>
    <View style={styles.optionsContainer}>
      <View style={styles.moveContainer}>
        <TouchableOpacity
          style={styles.moveButtonContainer}
          onPress={onMoveUp}
        >
          <Icon.MaterialIcons
            name="arrow-upward"
            size={26}
            color="#ffffff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.moveButtonContainer}
          onPress={onMoveDown}
        >
          <Icon.MaterialIcons
            name="arrow-downward"
            size={26}
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.deleteContainer}
        onPress={onDelete}
      >
        <Icon.MaterialIcons
          name="close"
          size={26}
          color="#ffffff"
        />
      </TouchableOpacity>
    </View>
  </Surface>
);

EditMethodListItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  onImageUpload: PropTypes.func,
  onChange: PropTypes.func,
  onMoveUp: PropTypes.func,
  onMoveDown: PropTypes.func,
  onDelete: PropTypes.func,
};

EditMethodListItem.defaultProps = {
  onImageUpload: () => {},
  onChange: () => {},
  onMoveUp: () => {},
  onMoveDown: () => {},
  onDelete: () => {},
};

export default EditMethodListItem;
