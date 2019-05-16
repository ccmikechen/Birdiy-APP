import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ListView } from 'react-native';
import i18n from 'i18n-js';

import MoreButton from '../MoreButton';
import HorProjectSection from '../HorProjectSection';

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
      <HorProjectSection
        project={project}
        onPress={() => onOpenProject(project.id)}
        hasAuthor
      />
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
            onPress={onMorePress}
            text={i18n.t('general.more')}
          />
        </View>
      </View>
    );
  }
}
