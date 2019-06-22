import React from 'react';
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

const FacebookSectionAd = ({ nativeAd }) => {
  const {
    adTranslation,
    advertiserName,
    headline,
    bodyText,
    callToActionText,
  } = nativeAd;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.adContainer}>
          <Text style={styles.adText}>
            {adTranslation}
          </Text>
        </View>
        <AdOptionsView />
      </View>
      <AdTriggerView>
        <AdMediaView style={styles.media} />
        {headline ? (
          <View style={styles.headlineContainer}>
            <Text style={styles.headline}>
              {headline}
            </Text>
          </View>
        ) : null}
        <View style={styles.bodyTextContainer}>
          <Text
            style={styles.bodyText}
            numberOfLines={3}
          >
            {bodyText}
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.advertiserContainer}>
            <AdIconView style={styles.icon} />
            <View style={styles.advertiserNameContainer}>
              <Text style={styles.advertiserName}>
                {advertiserName}
              </Text>
            </View>
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
};

FacebookSectionAd.propTypes = {
  nativeAd: PropTypes.shape({
    adTranslation: PropTypes.string.isRequired,
    advertiserName: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    callToActionText: PropTypes.string.isRequired,
  }).isRequired,
};

export default FacebookAds.withNativeAd(FacebookSectionAd);
