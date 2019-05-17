import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

import SimpleScreenView from '../SimpleScreenView';
import LoadingIndicator from '../LoadingIndicator';
import Refresh from '../Refresh';

import styles from './styles';

export default class InputScreenView extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    loading: PropTypes.bool,
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    headerPadding: PropTypes.bool,
    refreshing: PropTypes.bool,
    onRefresh: PropTypes.func,
  };

  static defaultProps = {
    children: null,
    loading: false,
    headerPadding: true,
    refreshing: false,
    onRefresh: null,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ isTabBarVisible: true });
  }

  render() {
    const {
      children,
      loading,
      headerPadding,
      refreshing,
      onRefresh,
    } = this.props;

    return (
      <SimpleScreenView {...this.props}>
        <InputScrollView
          style={styles.container}
          keyboardShouldPersistTaps="always"
          keyboardAvoidingViewProps={{
            behavior: 'padding',
          }}
          refreshControl={onRefresh && (
            <Refresh refreshing={refreshing} onRefresh={onRefresh} />
          )}
        >
          <View style={headerPadding ? styles.paddingView : styles.statusBarPaddingView} />
          {loading ? <LoadingIndicator /> : children}

        </InputScrollView>
      </SimpleScreenView>
    );
  }
}
