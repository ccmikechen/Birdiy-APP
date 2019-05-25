import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import i18n from 'i18n-js';

import ToggleButton from '../ToggleButton';

import styles from './styles';

const i18nOptions = { scope: 'cart.section' };

export default class PurchaseSection extends Component {
  static propTypes = {
    project: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      materials: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        amountUnit: PropTypes.string.isRequired,
        purchased: PropTypes.bool.isRequired,
      })),
    }).isRequired,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func,
    onOpenProject: PropTypes.func,
  };

  static defaultProps = {
    onToggle: () => {},
    onDelete: () => {},
    onOpenProject: () => {},
  };

  renderListItem = (type, item) => {
    const { onToggle } = this.props;

    return (
      <View
        style={styles.listItemContainer}
        key={item.id}
      >
        <View style={styles.listItemNameContainer}>
          <Text style={[styles.listItemName, item.purchased ? styles.disabledText : null]}>
            {item.name}
          </Text>
        </View>
        <View style={styles.listItemAmountContainer}>
          <Text style={[styles.listItemAmount, item.purchased ? styles.disabledText : null]}>
            {item.amountUnit}
          </Text>
        </View>
        <View style={styles.toggleButtonContainer}>
          <ToggleButton
            checked={item.purchased}
            onPress={() => onToggle(type, item.id)}
          />
        </View>
      </View>
    );
  };

  renderList = (type, items) => (
    <View style={styles.listContainer}>
      {items.map(item => this.renderListItem(type, item))}
    </View>
  );

  renderMaterialsSection = () => {
    const { project } = this.props;

    return (
      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>
            {i18n.t('materials.title', i18nOptions)}
          </Text>
        </View>
        {this.renderList('materials', project.materials)}
      </View>
    );
  };

  render() {
    const { project, onOpenProject, onDelete } = this.props;

    return (
      <Surface style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={onOpenProject}
          >
            <Text style={styles.name}>{project.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButtonContainer}
            onPress={onDelete}
          >
            <Text style={styles.deleteButtonText}>
              {i18n.t('general.delete')}
            </Text>
          </TouchableOpacity>
        </View>
        {this.renderMaterialsSection()}
      </Surface>
    );
  }
}
