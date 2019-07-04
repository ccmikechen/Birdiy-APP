import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import i18n from 'i18n-js';

import MessageView from '../MessageView';
import PurchaseSection from '../PurchaseSection';

import styles from './styles';

export default class PurchaseList extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      materials: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        amountUnit: PropTypes.string.isRequired,
        purchased: PropTypes.bool.isRequired,
      })),
    })),
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onOpenProject: PropTypes.func,
  };

  static defaultProps = {
    projects: [],
    onChange: () => {},
    onDelete: () => {},
    onOpenProject: () => {},
  };

  handleToggle = project => (type, id) => {
    const { onChange } = this.props;
    const newItems = project[type].map((item) => {
      if (item.id !== id) {
        return item;
      }

      return { ...item, purchased: !item.purchased };
    });

    onChange({ ...project, [type]: newItems });
  };

  render() {
    const { projects, onDelete, onOpenProject } = this.props;

    return (
      <View style={styles.container}>
        {projects.length > 0 ? projects.map(project => (
          <PurchaseSection
            key={project.id}
            project={project}
            onToggle={this.handleToggle(project)}
            onDelete={() => onDelete(project.id)}
            onOpenProject={() => onOpenProject(project.id)}
          />
        )) : (
          <MessageView
            message={i18n.t('cart.emptyMessage')}
            style={styles.emptyView}
          />
        )}
      </View>
    );
  }
}
