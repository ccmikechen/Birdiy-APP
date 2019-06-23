import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import * as FacebookAds from 'expo-ads-facebook';

import styles from './styles';

const {
  AdTriggerView,
  AdIconView,
  AdMediaView,
} = FacebookAds;

class FacebookProjectSectionAd extends PureComponent {
  static propTypes = {
    nativeAd: PropTypes.shape({
      adTranslation: PropTypes.string.isRequired,
      advertiserName: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      callToActionText: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidCatch() {}

  render() {
    const { nativeAd } = this.props;
    const {
      adTranslation,
      advertiserName,
      headline,
      callToActionText,
    } = nativeAd;

    return (
      <AdTriggerView style={styles.container}>
        <View style={styles.mediaContainer}>
          <AdMediaView style={styles.media} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoTopContainer}>
            <View style={styles.advertiserContainer}>
              <View style={styles.adTextContainer}>
                <Text style={styles.adText}>
                  {adTranslation}
                </Text>
              </View>
              <View style={styles.advertiserNameContainer}>
                <Text
                  style={styles.advertiserName}
                  numberOfLines={2}
                  textBreakStrategy="simple"
                >
                  {advertiserName}
                </Text>
              </View>
            </View>
            <AdIconView style={styles.icon} />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.headlineContainer}>
              <Text
                style={styles.headline}
                numberOfLines={3}
              >
                {headline}
              </Text>
            </View>
            <View style={styles.installTextContainer}>
              <Text style={styles.installText}>
                {callToActionText}
              </Text>
            </View>
          </View>
        </View>
      </AdTriggerView>
    );
  }
}

export default FacebookAds.withNativeAd(FacebookProjectSectionAd);
