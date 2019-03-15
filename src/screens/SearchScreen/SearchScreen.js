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
    data: {
      a: [1, 2],
      b: [3, 4],
    },
  };

  loadMoreContentAsync = key => async () => {
    const { data } = this.state;
    const tabData = data[key];
    this.setState({
      data: {
        ...data,
        [key]: [...tabData, 1],
      },
    });
  };

  renderSection = tabKey => () => (
    <View style={{
      height: 500,
      backgroundColor: tabKey === 'a' ? 'red' : 'blue',
    }}
    >
      <Text>Hello</Text>
    </View>
  );

  render() {
    const { navigation } = this.props;
    const { data } = this.state;
    const tabs = [{ key: 'a', title: 'AA' }, { key: 'b', title: 'BB' }];
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
        data={data}
        loadMoreContentAsync={this.loadMoreContentAsync}
        renderSection={this.renderSection}
        animatedScroll
      />
    );
  }
}
