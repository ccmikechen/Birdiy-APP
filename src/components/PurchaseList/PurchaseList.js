import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import PurchaseSection from '../PurchaseSection';

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
      <View>
        {projects.map(project => (
          <PurchaseSection
            key={project.id}
            project={project}
            onToggle={this.handleToggle(project)}
            onDelete={() => onDelete(project.id)}
            onOpenProject={() => onOpenProject(project.id)}
          />
        ))}
      </View>
    );
  }
}
