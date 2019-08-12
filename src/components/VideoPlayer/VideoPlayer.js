import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AppState, WebView, View, ViewPropTypes,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
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

  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener('change', setAppState);

    return () => {
      AppState.removeEventListener('change', setAppState);
    };
  });

  return (
    <View>
      <NavigationEvents
        onDidFocus={() => setAppState('active')}
        onWillBlur={() => setAppState('inactive')}
      />
      {
        appState === 'active' && (
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
        )
      }
    </View>
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
