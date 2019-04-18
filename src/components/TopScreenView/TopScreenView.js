import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import AnimatedHeader from '../AnimatedHeader';
import scrollViewTrigger from '../../helpers/scrollViewTrigger';
import LoadingIndicator from '../LoadingIndicator';

import styles from './styles';

const TriggerScrollView = scrollViewTrigger(ScrollView);

export default class TopScreenView extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    renderHeader: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    animatedScroll: PropTypes.bool,
    fullScreen: PropTypes.bool,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    animatedScroll: false,
    fullScreen: false,
    children: null,
    loading: false,
  };

  state = {
    isHeaderVisible: true,
  };

  handleVisible = visible => () => {
    const { navigation, animatedScroll } = this.props;
    if (!animatedScroll) {
      return;
    }
    navigation.setParams({ isTabBarVisible: visible });
    this.setState({ isHeaderVisible: visible });
  };

  render() {
    const {
      renderHeader,
      children,
      animatedScroll,
      fullScreen,
      loading,
    } = this.props;
    const { isHeaderVisible } = this.state;

    return (
      <View style={styles.container}>
        <AnimatedHeader
          renderHeader={renderHeader}
          visible={isHeaderVisible}
        />
        <TriggerScrollView
          onScrollDown={this.handleVisible(false)}
          onScrollUp={this.handleVisible(true)}
        >
          <View style={styles.paddingView} />
          {loading ? <LoadingIndicator /> : children}
        </TriggerScrollView>
        {animatedScroll || fullScreen ? null : (
          <View style={styles.bottomTabBarPaddingView} />
        )}
      </View>
    );
  }
}
