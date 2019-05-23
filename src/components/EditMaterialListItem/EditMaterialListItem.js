import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';
import { Surface } from 'react-native-paper';
import i18n from 'i18n-js';

import PureTextInput from '../PureTextInput';

import styles from './styles';

import Colors from '../../constants/Colors';

const i18nOptions = { scope: 'project.edit.materials' };

const EditMaterialListItem = ({
  data,
  onChange,
  onMoveUp,
  onMoveDown,
  onDelete,
  errors,
  touched,
}) => {
  const error = {
    name: touched.name && errors.name,
    amountUnit: touched.amountUnit && errors.amountUnit,
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
            maxLength={20}
            placeholder={i18n.t('name', i18nOptions)}
            onChangeText={(value) => {
              onChange({ ...data, name: value });
            }}
          />
        </View>
        <View style={styles.amountContainer}>
          <PureTextInput
            value={data.amountUnit}
            error={error.amountUnit}
            errorPrefix
            maxLength={20}
            placeholder={i18n.t('amountUnit', i18nOptions)}
            onChangeText={(value) => {
              onChange({ ...data, amountUnit: value });
            }}
          />
        </View>
      </View>
      <View style={styles.urlContainer}>
        <View style={styles.iconContainer}>
          <Icon.Entypo
            name="shop"
            size={26}
            color={Colors.headerIcon}
          />
        </View>
        <PureTextInput
          style={styles.textInput}
          value={data.url}
          error={error.url}
          placeholder={i18n.t('link', i18nOptions)}
          onChangeText={(value) => {
            onChange({ ...data, url: value });
          }}
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
};

EditMaterialListItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    amountUnit: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func,
  onMoveUp: PropTypes.func,
  onMoveDown: PropTypes.func,
  onDelete: PropTypes.func,
  errors: PropTypes.shape({
    name: PropTypes.string,
    amountUnit: PropTypes.string,
    url: PropTypes.string,
  }),
  touched: PropTypes.shape({
    name: PropTypes.bool,
    amountUnit: PropTypes.bool,
    url: PropTypes.bool,
  }),
};

EditMaterialListItem.defaultProps = {
  onChange: () => {},
  onMoveUp: () => {},
  onMoveDown: () => {},
  onDelete: () => {},
  errors: {},
  touched: {},
};

export default EditMaterialListItem;
