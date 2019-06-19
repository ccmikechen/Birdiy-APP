import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { Surface } from 'react-native-paper';
import i18n from 'i18n-js';

import PureTextInput from '../PureTextInput';

import styles from './styles';

import Colors from '../../constants/Colors';

const i18nOptions = { scope: 'project.edit.files' };

const EditFileListItem = ({
  data,
  onChange,
  onDownload,
  onMoveUp,
  onMoveDown,
  onDelete,
  errors,
  touched,
}) => {
  const error = {
    name: touched.name && errors.name,
    url: touched.url && errors.url,
  };

  return (
    <Surface style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <PureTextInput
            value={data.name}
            error={error.name}
            errorPrefix
            placeholder={i18n.t('name', i18nOptions)}
            onChangeText={(value) => {
              onChange({ ...data, name: value });
            }}
          />
        </View>
      </View>
      {
        data.type === 'file' ? (
          <View style={styles.linkContainer}>
            <View style={styles.iconContainer}>
              <Icon.MaterialCommunityIcons
                name="file-upload"
                size={26}
                color={Colors.headerIcon}
              />
            </View>
            {
              data.localFileName ? (
                <PureTextInput
                  style={styles.textInput}
                  value={data.localFileName}
                  error={error.url}
                  editable={false}
                  multiline
                />
              ) : (
                <TouchableOpacity
                  style={styles.textInput}
                  onPress={() => onDownload(data.url)}
                >
                  <Text style={styles.downloadLinkText}>
                    {i18n.t('general.download')}
                  </Text>
                </TouchableOpacity>
              )
            }
          </View>
        ) : (
          <View style={styles.linkContainer}>
            <View style={styles.iconContainer}>
              <Icon.MaterialCommunityIcons
                name="link-variant"
                size={26}
                color={Colors.headerIcon}
              />
            </View>
            <PureTextInput
              style={styles.textInput}
              value={data.url}
              error={error.url}
              errorPrefix
              placeholder={i18n.t('url', i18nOptions)}
              onChangeText={(value) => {
                onChange({ ...data, url: value });
              }}
            />
          </View>
        )
      }
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
};

EditFileListItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    localFileName: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func,
  onDownload: PropTypes.func,
  onMoveUp: PropTypes.func,
  onMoveDown: PropTypes.func,
  onDelete: PropTypes.func,
  errors: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  touched: PropTypes.shape({
    name: PropTypes.bool,
    url: PropTypes.bool,
  }),
};

EditFileListItem.defaultProps = {
  onChange: () => {},
  onDownload: () => {},
  onMoveUp: () => {},
  onMoveDown: () => {},
  onDelete: () => {},
  errors: {},
  touched: {},
};

export default EditFileListItem;
