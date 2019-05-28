import React from 'react';
import PropTypes from 'prop-types';
import { WebView, View, ViewPropTypes } from 'react-native';
import videoUrl from 'js-video-url-parser';

import LoadingIndicator from '../LoadingIndicator';

import styles from './styles';

const VideoPlayer = (props) => {
  const { video: { provider, id }, style } = props;
  const uri = videoUrl.create({
    videoInfo: { provider, id },
    format: 'embed',
    params: {
      controls: 1,
    },
  }).split('//')[1];

  return (
    <WebView
      style={[styles.container, style]}
      source={{ uri: `https://${uri}` }}
      javaScriptEnabled
      startInLoadingState
      renderLoading={() => (
        <View style={[styles.container, style]}>
          <LoadingIndicator />
        </View>
      )}
    />
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.shape({
    provider: PropTypes.oneOf(['youtube', 'vimeo']).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  style: ViewPropTypes.style,
};

VideoPlayer.defaultProps = {
  style: {},
};

export default VideoPlayer;
