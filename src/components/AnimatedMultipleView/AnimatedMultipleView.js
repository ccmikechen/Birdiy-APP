import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Animated, Dimensions } from 'react-native';

import styles from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class AnimatedMultipleView extends Component {
  static propTypes = {
    duration: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    index: PropTypes.number,
  };

  static defaultProps = {
    duration: 100,
    index: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { duration, index } = nextProps;
    const { offset } = prevState;

    Animated.timing(offset, {
      toValue: -SCREEN_WIDTH * index,
      duration,
      useNativeDriver: true,
    }).start();

    return null;
  }

  constructor(props) {
    super(props);
    const { index } = props;
    this.state = {
      offset: new Animated.Value(-SCREEN_WIDTH * index),
    };
  }

  render() {
    const { children } = this.props;
    const { offset } = this.state;
    const width = SCREEN_WIDTH * React.Children.count(children);
    return (
      <Animated.View style={[styles.container, {
        width,
        transform: [{ translateX: offset }],
      }]}
      >
        {React.Children.map(children, child => (
          <View style={styles.view}>
            {child}
          </View>
        ))}
      </Animated.View>
    );
  }
}
