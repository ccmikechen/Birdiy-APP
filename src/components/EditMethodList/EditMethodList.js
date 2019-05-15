import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import i18n from 'i18n-js';

import EditMethodListItem from '../EditMethodListItem';

import { DEFAULT_METHOD } from '../../constants/defaults';

import styles from './styles';

const i18nOptions = { scope: 'project.edit.methods' };

export default class EditMethodList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    })).isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  handleImageUpload = index => (image) => {
    const { data, onChange } = this.props;
    data[index].image = image.uri;
    onChange(data);
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

  handleItemAdd = () => {
    const { data, onChange } = this.props;
    onChange([...data, DEFAULT_METHOD]);
  };

  renderItem = (item, index) => (
    <View
      style={styles.itemContainer}
      key={`method-${index}`}
    >
      <View style={styles.stepContainer}>
        <Text style={styles.step}>
          {i18n.t('step', { ...i18nOptions, step: index + 1 })}
        </Text>
      </View>
      <EditMethodListItem
        data={item}
        onImageUpload={this.handleImageUpload(index)}
        onChange={newData => this.handleDataChange(index, newData)}
        onMoveUp={this.handleItemMoveUp(index)}
        onMoveDown={this.handleItemMoveDown(index)}
        onDelete={this.handleItemDelete(index)}
      />
    </View>
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
            icon="add"
            mode="outlined"
            color="#ffffff"
            onPress={this.handleItemAdd}
          >
            <Text style={styles.addButtonText}>
              {i18n.t('add', i18nOptions)}
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
