import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PureTextInput from '../PureTextInput';

import styles from './styles';

export default class RelatedProjectSelector extends Component {
  static propTypes = {
    project: PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  handleSearch = () => {
    const { onChange } = this.props;

    onChange({
      type: 'project',
      name: '認真',
      id: 'UHJvamVjdDo0Mw==',
    });
  };

  handleCustom = () => {
    const { onChange, project } = this.props;

    if (project.type === 'custom') {
      return;
    }
    onChange({
      type: 'custom',
      name: '',
      id: null,
    });
  };

  renderTab = ({ name, onPress = () => {} }, type) => {
    const { project } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.tab,
          type === 'project' ? styles.firstTab : null,
          type === project.type ? styles.selectedTab : null,
        ]}
        key={`tab-${type}`}
        onPress={onPress}
      >
        <Text style={[
          styles.tabText,
          type === project.type ? styles.selectedTabText : null,
        ]}
        >
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  renderTabs = () => (
    <View style={styles.tabsContainer}>
      {this.renderTab({ name: '從專案', onPress: this.handleSearch }, 'project')}
      {this.renderTab({ name: '自訂專案', onPress: this.handleCustom }, 'custom')}
    </View>
  );

  renderProject = () => {
    const { project } = this.props;

    return (
      <PureTextInput
        style={styles.textInput}
        value={project.name}
        editable={false}
      />
    );
  };

  renderCustom = () => {
    const { onChange, project } = this.props;

    return (
      <PureTextInput
        style={styles.textInput}
        value={project.name}
        placeholder="輸入自訂專案名稱"
        onChangeText={(value) => {
          onChange({
            type: 'custom',
            name: value,
            id: null,
          });
        }}
        maxLength={20}
        counter
      />
    );
  };

  renderContent = () => {
    const { project } = this.props;

    switch (project.type) {
      case 'project':
        return this.renderProject();
      case 'custom':
        return this.renderCustom();
      default:
        return null;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderTabs()}
        {this.renderContent()}
      </View>
    );
  }
}
