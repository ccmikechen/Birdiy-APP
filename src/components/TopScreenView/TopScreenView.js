import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import AnimatedHeader from '../AnimatedHeader';
import TriggerScrollView from '../TriggerScrollView';

import Size from '../../constants/Size';

import styles from './styles';

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
  };

  static defaultProps = {
    animatedScroll: false,
    children: null,
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
    } = this.props;
    const { isHeaderVisible } = this.state;

    return (
      <View style={[styles.container, {
        marginBottom: animatedScroll ? 0 : Size.bottomTabBarHeight,
      }]}
      >
        <AnimatedHeader
          renderHeader={renderHeader}
          visible={isHeaderVisible}
        />
        <TriggerScrollView
          onScrollDown={this.handleVisible(false)}
          onScrollUp={this.handleVisible(true)}
        >
          <View style={styles.paddingView} />
          {children}
        </TriggerScrollView>
      </View>
    );
  }
}
