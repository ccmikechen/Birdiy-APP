import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'expo';
import { Surface } from 'react-native-paper';

import MoreButton from '../MoreButton';

import Size from '../../constants/Size';

import styles from './styles';

const rowHasChanged = (r1, r2) => (
  JSON.stringify(r1) !== JSON.stringify(r2)
);

export default class UserFavoritesScene extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
    onMorePress: PropTypes.func,
    onOpenProject: PropTypes.func,
  };

  static defaultProps = {
    onMorePress: () => {},
    onOpenProject: () => {},
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({ rowHasChanged });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.projects),
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { projects } = nextProps;
    const { dataSource } = prevState;

    return {
      ...prevState,
      dataSource: dataSource.cloneWithRows(projects),
    };
  }

  renderRow = (project) => {
    const { onOpenProject } = this.props;

    return (
      <Surface style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => onOpenProject(project.id)}
        >
          <View style={styles.imageContainer}>
            {project.image ? (
              <Image
                source={{ uri: project.image }}
                style={styles.image}
              />
            ) : (
              <Icon.MaterialCommunityIcons
                name="image-filter"
                size={Size.userProjectListImageSize / 2}
                color="#ffffff"
              />
            )}
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>
                {project.name}
              </Text>
            </View>
            <View style={styles.authorContainer}>
              <Text style={styles.author}>
                {`by ${project.author.name}`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
    );
  };

  render() {
    const { onMorePress } = this.props;
    const { dataSource } = this.state;

    return (
      <View>
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
