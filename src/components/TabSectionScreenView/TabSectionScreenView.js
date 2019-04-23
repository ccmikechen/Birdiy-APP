import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import {
  ScrollIntoView,
  wrapScrollViewConfigured,
} from 'react-native-scroll-into-view';

import NormalTabBar from '../NormalTabBar';
import LoadingIndicator from '../LoadingIndicator';

import Size from '../../constants/Size';

import styles from './styles';

const ScrollIntoViewScrollView = wrapScrollViewConfigured({
  refPropName: 'innerRef',
})(InputScrollView);

const options = {
  align: 'top',
  animated: false,
  immediate: true,
};

export default class TabSectionScreenView extends Component {
  static propTypes = {
    renderHeader: PropTypes.func.isRequired,
    renderSection: PropTypes.func.isRequired,
    renderFooter: PropTypes.func,
    onTabChange: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    fullScreen: PropTypes.bool,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    renderFooter: () => null,
    fullScreen: false,
    onTabChange: () => {},
    loading: false,
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
      renderFooter,
      fullScreen,
      loading,
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
        {loading ? <LoadingIndicator /> : (
          <ScrollIntoViewScrollView>
            <KeyboardAvoidingView behavior="padding" enabled>
              {tabs.map(({ key }, index) => (
                <ScrollIntoView
                  key={`section-${key}`}
                  ref={(ref) => { this.sections[index] = ref; }}
                >
                  {renderSection(key)}
                </ScrollIntoView>
              ))}
            </KeyboardAvoidingView>
            {renderFooter()}
            <View style={{ height: 200 }} />
          </ScrollIntoViewScrollView>
        )}
      </View>
    );
  }
}
