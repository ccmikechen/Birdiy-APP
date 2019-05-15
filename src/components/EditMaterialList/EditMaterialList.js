import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import i18n from 'i18n-js';

import EditMaterialListItem from '../EditMaterialListItem';

import { DEFAULT_MATERIAL } from '../../constants/defaults';

import styles from './styles';

const i18nOptions = { scope: 'project.edit.materials' };

export default class EditMaterialList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      amountUnit: PropTypes.string,
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

  handleItemAdd = () => {
    const { data, onChange } = this.props;
    onChange([...data, DEFAULT_MATERIAL]);
  };

  renderItem = (item, index) => (
    <EditMaterialListItem
      key={`material-${index}`}
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
