import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { clone } from 'lodash';
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
    errors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      amountUnit: PropTypes.string,
      url: PropTypes.string,
    })),
    touched: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.bool,
      amountUnit: PropTypes.bool,
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

  handleItemAdd = () => {
    const { data, onChange } = this.props;
    onChange([...data, clone(DEFAULT_MATERIAL)]);
  };

  renderItem = (item, index) => {
    const { errors, touched } = this.props;

    return (
      <EditMaterialListItem
        key={`material-${index}`}
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
        <Button
          title={i18n.t('add', i18nOptions)}
          titleStyle={styles.addButtonText}
          containerStyle={styles.addButtonContainer}
          buttonStyle={styles.addButton}
          icon={{
            name: 'add',
            size: 20,
            color: '#ffffff',
          }}
          onPress={this.handleItemAdd}
        />
      </View>
    );
  }
}
