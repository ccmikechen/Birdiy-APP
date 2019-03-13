import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

export default class TriggerScrollView extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    onScroll: PropTypes.func,
    onScrollUp: PropTypes.func,
    onScrollDown: PropTypes.func,
  };

  static defaultProps = {
    onScroll: () => {},
    onScrollUp: () => {},
    onScrollDown: () => {},
    children: null,
  };

  constructor() {
    super();
    this.lastY = 0;
  }

  handleScroll = (event) => {
    const { onScroll, onScrollUp, onScrollDown } = this.props;
    onScroll(event);

    const currentY = event.nativeEvent.contentOffset.y;

    if (currentY < 0) {
      return;
    }

    if (currentY - this.lastY > 3) {
      this.lastY = currentY;
      onScrollDown(currentY - this.lastY);
    } else if (currentY - this.lastY < -3) {
      this.lastY = currentY;
      onScrollUp(currentY - this.lastY);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <ScrollView
        {...this.props}
        onScroll={this.handleScroll}
        scrollEventThrottle={16}
      >
        {children}
      </ScrollView>
    );
  }
}
