import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { DocumentPicker } from 'expo';
import { Button } from 'react-native-paper';

import EditFileListItem from '../EditFileListItem';

import { DEFAULT_FILE } from '../../constants/defaults';

import styles from './styles';

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
  };

  static defaultProps = {
    onChange: () => {},
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

  renderItem = (item, index) => (
    <EditFileListItem
      key={`file-${index}`}
      data={item}
      onChange={newData => this.handleDataChange(index, newData)}
      onMoveUp={this.handleItemMoveUp(index)}
      onMoveDown={this.handleItemMoveDown(index)}
      onDelete={this.handleItemDelete(index)}
    />
  );

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          {data.map(this.renderItem)}
        </View>
        <View style={styles.addButtonContainer}>
          <Button
            style={styles.addButton}
            icon="insert-link"
            mode="outlined"
            color="#ffffff"
            onPress={this.handleFileLinkAdd}
          >
            <Text style={styles.addButtonText}>加檔案連結</Text>
          </Button>
          <Button
            style={styles.addButton}
            icon="file-upload"
            mode="outlined"
            color="#ffffff"
            onPress={this.handleUploadFile}
          >
            <Text style={styles.addButtonText}>上傳檔案</Text>
          </Button>
        </View>
      </View>
    );
  }
}
