import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import InfiniteTabsScreenView from '../../components/InfiniteTabsScreenView';
import NormalTopHeader from '../../components/NormalTopHeader';

export default class SearchScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    tabs: {
      a: {
        title: 'AA',
        data: [1, 2],
      },
      b: {
        title: 'BB',
        data: [3, 4],
      },
    },
  };

  loadMoreContentAsync = key => async () => {
    const { tabs } = this.state;
    const tab = tabs[key];
    this.setState({
      tabs: {
        ...tabs,
        [key]: {
          ...tab,
          data: [...tab.data, 1],
        },
      },
    });
  };

  renderSection = () => () => (
    <View style={{ height: 500 }}><Text>Hello</Text></View>
  );

  render() {
    const { navigation } = this.props;
    const { tabs } = this.state;

    return (
      <InfiniteTabsScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalTopHeader
            title="搜尋"
            onOpenDrawer={() => navigation.openDrawer()}
          />
        )}
        tabs={tabs}
        loadMoreContentAsync={this.loadMoreContentAsync}
        renderSection={this.renderSection}
        animatedScroll
      />
    );
  }
}
