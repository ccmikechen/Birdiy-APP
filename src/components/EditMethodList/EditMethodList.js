import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { clone } from 'lodash';
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
    errors: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
      })),
      PropTypes.string,
    ]),
    touched: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.bool,
      title: PropTypes.bool,
      content: PropTypes.bool,
    })),
  };

  static defaultProps = {
    onChange: () => {},
    errors: [],
    touched: [],
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
    onChange([...data, clone(DEFAULT_METHOD)]);
  };

  renderItem = (item, index) => {
    const { errors, touched } = this.props;

    return (
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
          errors={Array.isArray(errors) ? errors[index] : undefined}
          touched={touched && touched[index]}
        />
      </View>
    );
  };

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          {data.map(this.renderItem)}
        </View>
        <Button
          title={i18n.t('add', i18nOptions)}
          titleStyle={styles.addButtonText}
          containerStyle={styles.addButtonContainer}
          buttonStyle={styles.addButton}
          icon={(
            <Icon.MaterialIcons
              name="add"
              size={20}
              color="#ffffff"
            />
)}
          onPress={this.handleItemAdd}
        />
      </View>
    );
  }
}
