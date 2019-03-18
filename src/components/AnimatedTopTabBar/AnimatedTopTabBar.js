import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import MaterialTabs from 'react-native-material-tabs';

import Size from '../../constants/Size';
import { TextColor } from '../../constants/Colors';

import styles from './styles';

const startOffsetAnimation = (offset, toValue, duration) => {
  Animated.timing(offset, {
    toValue,
    duration,
    useNativeDriver: true,
  }).start();
};

export default class AnimatedTopTabBar extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    duration: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    duration: 100,
    index: 0,
    onChange: () => {},
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { duration, visible } = nextProps;
    const { offset } = prevState;

    const wasVisible = prevState.isVisible;

    if (wasVisible && !visible) {
      const translate = -Size.headerHeight;
      startOffsetAnimation(offset, translate, duration);
    } else if (visible && !wasVisible) {
      startOffsetAnimation(offset, 0, duration);
    }

    return { ...prevState, isVisible: visible };
  }

  state = {
    isVisible: true,
    offset: new Animated.Value(0),
  };

  shouldComponentUpdate(nextProps) {
    const { visible, index } = this.props;

    return (visible !== nextProps.visible)
      || (index !== nextProps.index);
  }

  render() {
    const {
      tabs, index, onChange,
    } = this.props;
    const { offset } = this.state;

    return (
      <Animated.View
        style={[styles.tabBarContainer, {
          transform: [{ translateY: offset }],
        }]}
      >
        <MaterialTabs
          {...this.props}
          style={styles.tabBar}
          items={tabs}
          selectedIndex={index}
          barColor="transparent"
          activeTextColor={TextColor.primaryDark}
          inactiveTextColor={TextColor.subDark}
          indicatorColor="transparent"
          onChange={onChange}
        />
      </Animated.View>
    );
  }
}
