import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { Surface } from 'react-native-paper';

import MyProfileAddButton from '../MyProfileAddButton';
import MoreButton from '../MoreButton';

import styles from './styles';

const rowHasChanged = (r1, r2) => (
  JSON.stringify(r1) !== JSON.stringify(r2)
);

export default class MyProjectsScene extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })).isRequired,
    onMorePress: PropTypes.func,
    onAddPress: PropTypes.func,
  };

  static defaultProps = {
    onMorePress: () => {},
    onAddPress: () => {},
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({ rowHasChanged });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.projects),
    };
  }

  renderRow = project => (
    <Surface style={styles.rowContainer}>
      <TouchableOpacity style={styles.touchable}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: project.image }}
            style={styles.image}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {project.name}
          </Text>
        </View>
      </TouchableOpacity>
    </Surface>
  );

  render() {
    const { onMorePress, onAddPress } = this.props;
    const { dataSource } = this.state;

    return (
      <View>
        <View style={styles.addButtonContainer}>
          <MyProfileAddButton
            text="新增專案"
            onPress={onAddPress}
          />
        </View>
        <ListView
          {...this.props}
          style={styles.listView}
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
        <View style={styles.moreButtonContainer}>
          <MoreButton
            text="更多"
            onPress={onMorePress}
          />
        </View>
      </View>
    );
  }
}
