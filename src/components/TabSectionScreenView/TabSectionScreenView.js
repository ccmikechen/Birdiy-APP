import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  ScrollIntoView,
  wrapScrollViewConfigured,
} from 'react-native-scroll-into-view';

import NormalTabBar from '../NormalTabBar';

import Size from '../../constants/Size';

import styles from './styles';

const ScrollIntoViewScrollView = wrapScrollViewConfigured({
  refPropName: 'innerRef',
})(KeyboardAwareScrollView);

const options = {
  align: 'top',
  animated: true,
  immediate: false,
};

export default class TabSectionScreenView extends Component {
  static propTypes = {
    renderHeader: PropTypes.func.isRequired,
    renderSection: PropTypes.func.isRequired,
    onTabChange: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    fullScreen: PropTypes.bool,
  };

  static defaultProps = {
    fullScreen: false,
    onTabChange: () => {},
  };

  state = {
    tabIndex: 0,
  };

  constructor(props) {
    super(props);
    this.sections = new Array(props.tabs.length);
  }

  handleTabChange = (index) => {
    const { onTabChange, tabs } = this.props;
    this.setState({ tabIndex: index });
    this.sections[index].scrollIntoView(options);
    onTabChange(tabs[index].key);
  };

  render() {
    const {
      tabs,
      renderHeader,
      renderSection,
      fullScreen,
    } = this.props;
    const { tabIndex } = this.state;

    return (
      <View style={[styles.container, {
        marginBottom: fullScreen ? 0 : Size.bottomTabBarHeight,
      }]}
      >
        {renderHeader()}
        <NormalTabBar
          tabs={tabs.map(({ title }) => title)}
          index={tabIndex}
          onChange={this.handleTabChange}
        />
        <ScrollIntoViewScrollView
          scrollIntoViewOptions={options}
          enableOnAndroid
          extraHeight={120}
        >
          {tabs.map(({ key }, index) => (
            <ScrollIntoView
              key={`section-${key}`}
              ref={(ref) => { this.sections[index] = ref; }}
            >
              {renderSection(key)}
            </ScrollIntoView>
          ))}
        </ScrollIntoViewScrollView>
      </View>
    );
  }
}
