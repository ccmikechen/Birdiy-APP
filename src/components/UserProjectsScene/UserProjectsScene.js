import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import i18n from 'i18n-js';

import UserProfileAddButton from '../UserProfileAddButton';
import MoreButton from '../MoreButton';
import MyProjectActions from '../MyProjectActions';
import HorProjectSection from '../HorProjectSection';
import MessageView from '../MessageView';

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
    visible: PropTypes.bool,
  };

  static defaultProps = {
    onMorePress: () => {},
    onAddPress: () => {},
    onOpenProject: () => {},
    onEditProject: () => {},
    onDeleteProject: () => {},
    visible: true,
  };

  renderEditableRow = ({ item: project }) => {
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

  renderRow = ({ item: project }) => {
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
      projects,
      onMorePress,
      onAddPress,
      editable,
      onEditProject,
      onDeleteProject,
      visible,
    } = this.props;

    return (
      <View style={visible ? null : { display: 'none' }}>
        {editable ? (
          <UserProfileAddButton
            text={i18n.t('project.create.title')}
            onPress={onAddPress}
          />
        ) : null}
        <FlatList
          {...this.props}
          data={projects}
          renderItem={editable ? this.renderEditableRow : this.renderRow}
          ListEmptyComponent={(
            <MessageView
              message={i18n.t('profile.emptyMessage.projects')}
              style={{ paddingTop: 100 }}
            />
)}
          keyExtractor={item => item.id}
        />
        {projects.length > 0 && (
          <MoreButton
            onPress={onMorePress}
            text={i18n.t('general.more')}
          />
        )}
        <MyProjectActions
          ref={(ref) => { this.actions = ref; }}
          onEditProject={({ id }) => onEditProject(id)}
          onDeleteProject={({ id }) => onDeleteProject(id)}
        />
      </View>
    );
  }
}
