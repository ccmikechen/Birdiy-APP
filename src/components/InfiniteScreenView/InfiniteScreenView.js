import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ListView } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import AnimatedHeader from '../AnimatedHeader';
import scrollViewTrigger from '../../helpers/scrollViewTrigger';

import Size from '../../constants/Size';

import styles from './styles';

const TriggerScrollView = scrollViewTrigger(InfiniteScrollView);

const rowHasChanged = (r1, r2) => (
  JSON.stringify(r1) !== JSON.stringify(r2)
);

export default class InfiniteScreenView extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    renderHeader: PropTypes.func.isRequired,
    animatedScroll: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    loadMoreContentAsync: PropTypes.func.isRequired,
    renderSection: PropTypes.func.isRequired,
  };

  static defaultProps = {
    animatedScroll: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    const { dataSource } = prevState;
    const ids = data.map((_, index) => index);

    return {
      ...prevState,
      dataSource: dataSource.cloneWithRows(data, ids),
    };
  }

  state = {
    isHeaderVisible: true,
    canLoadMoreContent: true,
    dataSource: new ListView.DataSource({ rowHasChanged }),
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
      animatedScroll,
      loadMoreContentAsync,
      renderSection,
    } = this.props;
    const {
      isHeaderVisible,
      dataSource,
      canLoadMoreContent,
    } = this.state;

    return (
      <View style={[styles.container, {
        marginBottom: animatedScroll ? 0 : Size.bottomTabBarHeight,
      }]}
      >
        <AnimatedHeader
          renderHeader={renderHeader}
          visible={isHeaderVisible}
        />
        <ListView
          renderScrollComponent={props => (
            <TriggerScrollView
              {...props}
              onScrollDown={this.handleVisible(false)}
              onScrollUp={this.handleVisible(true)}
            />
          )}
          dataSource={dataSource}
          renderRow={renderSection}
          canLoadMore={canLoadMoreContent}
          onLoadMoreAsync={loadMoreContentAsync}
          renderHeader={() => <View style={styles.paddingView} />}
        />
      </View>
    );
  }
}
