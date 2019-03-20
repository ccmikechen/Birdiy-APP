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
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })).isRequired,
    onMorePress: PropTypes.func,
  };

  static defaultProps = {
    onMorePress: () => {},
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({ rowHasChanged });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.projects),
    };
  }

  handleAddPress = () => {
  };

  renderRow = project => (
    <Surface style={styles.rowContainer}>
      <TouchableOpacity style={styles.touchable}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: project.image }}
            style={styles.image}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {project.title}
          </Text>
        </View>
      </TouchableOpacity>
    </Surface>
  );

  render() {
    const { onMorePress } = this.props;
    const { dataSource } = this.state;

    return (
      <View>
        <View style={styles.addButtonContainer}>
          <MyProfileAddButton
            text="新增專案"
            onPress={this.handleAddPress}
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
