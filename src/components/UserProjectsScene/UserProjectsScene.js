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

import UserProfileAddButton from '../UserProfileAddButton';
import MoreButton from '../MoreButton';
import ActionMenuButton from '../ActionMenuButton';
import MyProjectActions from '../MyProjectActions';

import Size from '../../constants/Size';

import styles from './styles';

const rowHasChanged = (r1, r2) => (
  JSON.stringify(r1) !== JSON.stringify(r2)
);

export default class UserProjectsScene extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      published: PropTypes.bool,
    })).isRequired,
    editable: PropTypes.bool.isRequired,
    onMorePress: PropTypes.func,
    onAddPress: PropTypes.func,
    onOpenProject: PropTypes.func,
    onEditProject: PropTypes.func,
    onDeleteProject: PropTypes.func,
  };

  static defaultProps = {
    onMorePress: () => {},
    onAddPress: () => {},
    onOpenProject: () => {},
    onEditProject: () => {},
    onDeleteProject: () => {},
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

  renderEditableRow = (project) => {
    const {
      onOpenProject,
      onEditProject,
      onDeleteProject,
    } = this.props;

    return (
      <Surface style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => (
            project.published
              ? onOpenProject(project.id)
              : onEditProject(project.id)
          )}
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
          <View style={styles.contentContainer}>
            <View style={styles.topContentContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>
                  {project.name}
                </Text>
              </View>
              <View style={styles.optionContainer}>
                <ActionMenuButton
                  onPress={() => this.actions.show(project)}
                />
              </View>
            </View>
            <View style={styles.bottomContentContainer}>
              <View style={styles.statusContainer}>
                {project.published ? (
                  <Text style={[styles.status, styles.publishedStatus]}>
                    公開
                  </Text>
                ) : (
                  <Text style={[styles.status, styles.draftStatus]}>
                    草稿
                  </Text>
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <MyProjectActions
          ref={(ref) => { this.actions = ref; }}
          onEditProject={() => onEditProject(project.id)}
          onDeleteProject={() => onDeleteProject(project.id)}
        />
      </Surface>
    );
  };

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
          <View style={styles.contentContainer}>
            <View style={styles.topContentContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>
                  {project.name}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
    );
  };

  render() {
    const { onMorePress, onAddPress, editable } = this.props;
    const { dataSource } = this.state;

    return (
      <View>
        {editable ? (
          <View style={styles.addButtonContainer}>
            <UserProfileAddButton
              text="新增專案"
              onPress={onAddPress}
            />
          </View>
        ) : null}
        <ListView
          {...this.props}
          style={styles.listView}
          dataSource={dataSource}
          renderRow={editable ? this.renderEditableRow : this.renderRow}
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
