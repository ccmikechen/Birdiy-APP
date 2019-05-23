import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleScreenView from '../SimpleScreenView';
import TabsPager from '../TabsPager';

export default class TabsScreenView extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    onToggleTabBar: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    tabsScrollable: PropTypes.bool,
  };

  static defaultProps = {
    onToggleTabBar: () => {},
    tabsScrollable: false,
  };

  state = {
    tabIndex: 0,
  };

  handleChangeTab = (index) => {
    const { navigation, onToggleTabBar } = this.props;

    this.setState({ tabIndex: index });
    navigation.setParams({ isTabBarVisible: true });
    onToggleTabBar(true);
  };

  render() {
    const {
      tabs,
      children,
      tabsScrollable,
      ...restProps
    } = this.props;
    const {
      tabIndex,
    } = this.state;

    return (
      <SimpleScreenView {...restProps}>
        <TabsPager
          tabs={tabs}
          tabsScrollable={tabsScrollable}
          onChangeTab={this.handleChangeTab}
          tabIndex={tabIndex}
        >
          {children}
        </TabsPager>
      </SimpleScreenView>
    );
  }
}
