import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { DocumentPicker } from 'expo';
import { Button } from 'react-native-elements';
import i18n from 'i18n-js';

import EditFileListItem from '../EditFileListItem';

import { DEFAULT_FILE } from '../../constants/defaults';

import styles from './styles';

const i18nOptions = { scope: 'project.edit.files' };

export default class EditFileList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf([
        'link', 'file',
      ]).isRequired,
      name: PropTypes.string,
      localFileName: PropTypes.string,
      url: PropTypes.string,
    })).isRequired,
    onChange: PropTypes.func,
    errors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })),
    touched: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.bool,
      url: PropTypes.bool,
    })),
  };

  static defaultProps = {
    onChange: () => {},
    errors: [],
    touched: [],
  };

  handleDataChange = (index, newData) => {
    const { data, onChange } = this.props;
    data[index] = newData;
    onChange(data);
  };

  handleItemMoveUp = index => () => {
    if (index === 0) {
      return;
    }
    this.switchData(index - 1, index);
  };

  handleItemMoveDown = index => () => {
    const { data } = this.props;

    if (index === (data.length - 1)) {
      return;
    }
    this.switchData(index, index + 1);
  };

  switchData = (indexA, indexB) => {
    const { data, onChange } = this.props;
    const temp = data[indexA];
    data[indexA] = data[indexB];
    data[indexB] = temp;
    onChange(data);
  };

  handleItemDelete = index => () => {
    const { data, onChange } = this.props;

    if (data.length <= 1) {
      return;
    }
    data.splice(index, 1);
    onChange(data);
  };

  handleFileLinkAdd = () => {
    const { data, onChange } = this.props;
    onChange([...data, DEFAULT_FILE]);
  };

  handleUploadFile = async () => {
    const { data, onChange } = this.props;
    const result = await DocumentPicker.getDocumentAsync();

    if (result.type !== 'success') {
      return;
    }

    onChange([...data, {
      type: 'file',
      name: result.name,
      localFileName: result.name,
      url: result.uri,
    }]);
  };

  renderItem = (item, index) => {
    const { errors, touched } = this.props;

    return (
      <EditFileListItem
        key={`file-${index}`}
        data={item}
        onChange={newData => this.handleDataChange(index, newData)}
        onMoveUp={this.handleItemMoveUp(index)}
        onMoveDown={this.handleItemMoveDown(index)}
        onDelete={this.handleItemDelete(index)}
        errors={errors && errors[index]}
        touched={touched && touched[index]}
      />
    );
  };

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          {data.map(this.renderItem)}
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            title={i18n.t('addLink', i18nOptions)}
            titleStyle={styles.addButtonText}
            containerStyle={styles.addButtonContainer}
            buttonStyle={styles.addButton}
            onPress={this.handleFileLinkAdd}
          />
          <Button
            title={i18n.t('upload', i18nOptions)}
            titleStyle={styles.addButtonText}
            containerStyle={styles.addButtonContainer}
            buttonStyle={styles.addButton}
            onPress={this.handleUploadFile}
          />
        </View>
      </View>
    );
  }
}
