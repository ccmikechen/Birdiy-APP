import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ListView } from 'react-native';
import i18n from 'i18n-js';

import UserProfileAddButton from '../UserProfileAddButton';
import MoreButton from '../MoreButton';
import MyProjectActions from '../MyProjectActions';
import HorProjectSection from '../HorProjectSection';

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
    const { onOpenProject, onEditProject } = this.props;

    return (
      <HorProjectSection
        project={project}
        onPress={() => (
          project.published
            ? onOpenProject(project.id)
            : onEditProject(project.id)
        )}
        hasStatus
        hasActions
        onActionButtonPress={() => this.actions.show(project)}
      />
    );
  };

  renderRow = (project) => {
    const { onOpenProject } = this.props;

    return (
      <HorProjectSection
        project={project}
        onPress={() => onOpenProject(project.id)}
      />
    );
  };

  render() {
    const {
      onMorePress,
      onAddPress,
      editable,
      onEditProject,
      onDeleteProject,
    } = this.props;
    const { dataSource } = this.state;

    return (
      <View>
        {editable ? (
          <View style={styles.addButtonContainer}>
            <UserProfileAddButton
              text={i18n.t('project.create.title')}
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
            onPress={onMorePress}
            text={i18n.t('general.more')}
          />
        </View>
        <MyProjectActions
          ref={(ref) => { this.actions = ref; }}
          onEditProject={({ id }) => onEditProject(id)}
          onDeleteProject={({ id }) => onDeleteProject(id)}
        />
      </View>
    );
  }
}
