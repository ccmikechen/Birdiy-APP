import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SimpleScreenView from '../SimpleScreenView';
import TabsPager from '../TabsPager';

export default class TabsScreenView extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    tabsScrollable: PropTypes.bool,
  };

  static defaultProps = {
    tabsScrollable: false,
  };

  state = {
    tabIndex: 0,
  };

  handleChangeTab = (index) => {
    this.setState({ tabIndex: index });
    this.screenView.setHeaderVisible(true);
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
      <SimpleScreenView
        ref={(ref) => { this.screenView = ref; }}
        {...restProps}
      >
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
