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
    tabIndex: PropTypes.number,
    onTabChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
    tabIndex: 2,
    onTabChange: () => {},
  };

  handleSearch = (callback) => {
    const { onChange } = this.props;

    onChange({
      type: 'project',
      name: '認真',
      id: 'UHJvamVjdDo0Mw==',
    });
    callback();
  };

  handleSelectFavorite = () => {
  };

  handleCustom = (callback) => {
    const { onChange, project } = this.props;
    if (project.type === 'custom') {
      return;
    }
    onChange({
      type: 'custom',
      name: '',
      id: null,
    });
    callback();
  };

  renderTab = ({ name, onPress = () => {} }, index) => {
    const { tabIndex, onTabChange } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.tab,
          index === 0 ? styles.firstTab : null,
          index === tabIndex ? styles.selectedTab : null,
        ]}
        key={`tab-${index}`}
        onPress={() => {
          onPress(() => onTabChange(index));
        }}
      >
        <Text style={[
          styles.tabText,
          index === tabIndex ? styles.selectedTabText : null,
        ]}
        >
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  renderTabs = () => (
    <View style={styles.tabsContainer}>
      {this.renderTab({ name: '找專案', onPress: this.handleSearch }, 0)}
      {this.renderTab({ name: '從收藏選擇', onPress: this.handleSelectFavorite }, 1)}
      {this.renderTab({ name: '自訂專案', onPress: this.handleCustom }, 2)}
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
    const { tabIndex } = this.props;

    switch (tabIndex) {
      case 0:
      case 1:
        return this.renderProject();
      case 2:
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
