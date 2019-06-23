import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import * as FacebookAds from 'expo-ads-facebook';

import styles from './styles';

const {
  AdOptionsView,
  AdTriggerView,
  AdIconView,
  AdMediaView,
} = FacebookAds;

class FacebookActivitySectionAd extends PureComponent {
  static propTypes = {
    nativeAd: PropTypes.shape({
      advertiserName: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      bodyText: PropTypes.string.isRequired,
      callToActionText: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidCatch() {}

  render() {
    const { nativeAd } = this.props;
    const {
      advertiserName,
      headline,
      bodyText,
      callToActionText,
    } = nativeAd;

    return (
      <View style={styles.container}>
        <View style={styles.optionsContainer}>
          <AdOptionsView />
        </View>
        <AdTriggerView>
          <View style={styles.profileContainer}>
            <AdIconView style={styles.icon} />
            <View style={styles.advertiserNameContainer}>
              <Text style={styles.advertiserName}>
                {advertiserName}
              </Text>
            </View>
          </View>
          <View style={styles.bodyTextContainer}>
            <Text style={styles.bodyText}>
              {bodyText}
            </Text>
          </View>
          <AdMediaView style={styles.media} />
          <View style={styles.footerContainer}>
            <View style={styles.headlineContainer}>
              <Text style={styles.headline}>
                {headline}
              </Text>
            </View>
            <View style={styles.installTextContainer}>
              <Text style={styles.installText}>
                {callToActionText}
              </Text>
            </View>
          </View>
        </AdTriggerView>
      </View>
    );
  }
}

export default FacebookAds.withNativeAd(FacebookActivitySectionAd);
