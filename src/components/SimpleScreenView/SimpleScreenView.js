import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import * as FacebookAds from 'expo-ads-facebook';
import { AdMobBanner } from 'expo-ads-admob';
import i18n from 'i18n-js';

import AnimatedHeader from '../AnimatedHeader';
import LoadingIndicator from '../LoadingIndicator';
import ReloadMessageView from '../ReloadMessageView';

import { isAdsVisible } from '../../helpers/ads';

import { NetworkRequestError } from '../../errors';

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
    showStatusBar: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.instanceOf(Error),
    retry: PropTypes.func,
    adType: PropTypes.oneOf(['admob', 'facebook']),
  };

  static defaultProps = {
    animatedScroll: false,
    onToggleTabBar: () => {},
    headerPadding: true,
    fullScreen: false,
    showStatusBar: true,
    children: null,
    loading: false,
    adType: null,
    retry: () => {},
    error: null,
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

  renderChildren = () => {
    const {
      children,
      loading,
      error,
      retry,
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

    if (error instanceof NetworkRequestError) {
      return (
        <ReloadMessageView
          message={i18n.t('networkErrorMessage')}
          onReload={retry}
          style={styles.errorView}
        />
      );
    }

    if (error) {
      return (
        <ReloadMessageView
          message={i18n.t('generalErrorMessage')}
          onReload={retry}
          style={styles.errorView}
        />
      );
    }

    return loading ? <LoadingIndicator /> : newChildren;
  };

  render() {
    const {
      renderHeader,
      animatedScroll,
      headerPadding,
      fullScreen,
      showStatusBar,
      adType,
    } = this.props;
    const { isHeaderVisible } = this.state;

    const adPadding = adType ? 50 : 0;
    const bottomTabBarPadding = animatedScroll || fullScreen
      ? 0
      : Size.bottomTabBarHeight;
    const bottomPadding = (isAdsVisible() ? adPadding : 0) + bottomTabBarPadding;

    return (
      <View style={styles.container}>
        {!showStatusBar && (
          <StatusBar
            hidden
            showHideTransition="slide"
          />
        )}
        <AnimatedHeader
          renderHeader={renderHeader}
          visible={!animatedScroll || isHeaderVisible}
        />
        {animatedScroll || !headerPadding ? null : (
          <View style={styles.paddingView} />
        )}
        {this.renderChildren()}
        {isAdsVisible() && this.renderAd()}
        <View style={{ height: bottomPadding }} />
      </View>
    );
  }
}
