import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import EditMethodListItem from '../EditMethodListItem';

import styles from './styles';

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
    onChange([...data, {
      image: null,
      title: '',
      content: '',
    }]);
  };

  renderItem = (item, index) => (
    <View
      style={styles.itemContainer}
      key={`method-${index}`}
    >
      <View style={styles.stepContainer}>
        <Text style={styles.step}>
          {`步驟 ${index + 1}`}
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
            <Text style={styles.addButtonText}>加步驟</Text>
          </Button>
        </View>
      </View>
    );
  }
}
