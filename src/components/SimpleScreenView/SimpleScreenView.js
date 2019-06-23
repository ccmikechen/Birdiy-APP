import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as FacebookAds from 'expo-ads-facebook';
import { AdMobBanner } from 'expo-ads-admob';

import AnimatedHeader from '../AnimatedHeader';
import LoadingIndicator from '../LoadingIndicator';

import Size from '../../constants/Size';

import styles from './styles';

export default class SimpleScreenView extends Component {
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
    headerPadding: PropTypes.bool,
    onToggleTabBar: PropTypes.func,
    fullScreen: PropTypes.bool,
    loading: PropTypes.bool,
    adType: PropTypes.oneOf(['admob', 'facebook']),
  };

  static defaultProps = {
    animatedScroll: false,
    onToggleTabBar: () => {},
    headerPadding: true,
    fullScreen: false,
    children: null,
    loading: false,
    adType: null,
  };

  state = {
    isHeaderVisible: true,
  };

  setHeaderVisible = (visible) => {
    const {
      navigation,
      animatedScroll,
      onToggleTabBar,
    } = this.props;

    if (!animatedScroll) {
      return;
    }

    navigation.setParams({ isTabBarVisible: visible });
    this.setState({ isHeaderVisible: visible });
    onToggleTabBar(visible);
  };

  renderAd = () => {
    const { adType } = this.props;

    switch (adType) {
      case 'admob':
        return (
          <View style={[styles.adContainer, styles.admobContainer]}>
            <AdMobBanner
              bannerSize="banner"
              adUnitID="ca-app-pub-9037534471740373/5155078086"
            />
          </View>
        );
      case 'facebook':
        return (
          <View style={styles.adContainer}>
            <FacebookAds.BannerAd
              placementId="595828547560598_626427057834080"
              type="standard"
            />
          </View>
        );
      default:
        return null;
    }
  };

  render() {
    const {
      renderHeader,
      children,
      animatedScroll,
      headerPadding,
      fullScreen,
      loading,
      adType,
    } = this.props;
    const { isHeaderVisible } = this.state;

    const newChildren = React.Children.map(children, child => (
      child && React.cloneElement(child, {
        onScrollTrigger: visible => () => this.setHeaderVisible(visible),
        onScrollDown: () => this.setHeaderVisible(false),
        onScrollUp: () => this.setHeaderVisible(true),
        isHeaderVisible,
      })
    ));

    const adPadding = adType ? 50 : 0;
    const bottomTabBarPadding = animatedScroll || fullScreen
      ? 0
      : Size.bottomTabBarHeight;

    return (
      <View style={styles.container}>
        <AnimatedHeader
          renderHeader={renderHeader}
          visible={!animatedScroll || isHeaderVisible}
        />
        {animatedScroll || !headerPadding ? null : (
          <View style={styles.paddingView} />
        )}
        {loading ? <LoadingIndicator /> : newChildren}
        {this.renderAd()}
        <View style={{ height: adPadding + bottomTabBarPadding }} />
      </View>
    );
  }
}
