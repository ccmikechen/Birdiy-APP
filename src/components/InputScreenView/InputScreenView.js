import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    refreshing: PropTypes.bool,
    onRefresh: PropTypes.func,
  };

  static defaultProps = {
    children: null,
    loading: false,
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
      refreshing,
      onRefresh,
    } = this.props;

    return (
      <SimpleScreenView {...this.props}>
        <InputScrollView
          style={styles.container}
          keyboardOffset={100}
          keyboardShouldPersistTaps="always"
          keyboardAvoidingViewProps={{
            behavior: 'padding',
          }}
          refreshControl={onRefresh && (
            <Refresh refreshing={refreshing} onRefresh={onRefresh} />
          )}
          {...this.props}
        >
          {loading ? <LoadingIndicator /> : children}

        </InputScrollView>
      </SimpleScreenView>
    );
  }
}
