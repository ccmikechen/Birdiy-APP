import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import i18n from 'i18n-js';

import MoreButton from '../MoreButton';
import HorProjectSection from '../HorProjectSection';
import MessageView from '../MessageView';

import styles from './styles';

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
    visible: PropTypes.bool,
  };

  static defaultProps = {
    onMorePress: () => {},
    onOpenProject: () => {},
    visible: true,
  };

  renderRow = ({ item: project }) => {
    const { onOpenProject } = this.props;

    return (
      <HorProjectSection
        project={project}
        onPress={() => onOpenProject(project.id)}
        hasAuthor
      />
    );
  };

  render() {
    const { projects, onMorePress, visible } = this.props;

    return (
      <View style={visible ? null : { display: 'none' }}>
        <FlatList
          {...this.props}
          style={styles.listView}
          data={projects}
          renderItem={this.renderRow}
          ListEmptyComponent={(
            <MessageView
              message={i18n.t('profile.emptyMessage.favorites')}
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
      </View>
    );
  }
}
