import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';

import EditMaterialListItem from '../EditMaterialListItem';

import styles from './styles';

export default class EditMaterialList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.string,
      link: PropTypes.string,
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

  handleAddMaterial = () => {
  };

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <EditMaterialListItem
          data={data[0]}
          onChange={newData => this.handleDataChange(0, newData)}
        />
        <View style={styles.addButtonContainer}>
          <Button
            style={styles.addButton}
            icon="add"
            mode="outlined"
            color="#ffffff"
            onPress={this.handleAddMaterial}
          >
            <Text style={styles.addButtonText}>加材料</Text>
          </Button>
        </View>
      </View>
    );
  }
}
