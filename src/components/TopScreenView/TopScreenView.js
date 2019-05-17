import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ScrollView } from 'react-navigation';

import SimpleScreenView from '../SimpleScreenView';
import scrollViewTrigger from '../../helpers/scrollViewTrigger';
import LoadingIndicator from '../LoadingIndicator';
import Refresh from '../Refresh';

import styles from './styles';

const TriggerScrollView = scrollViewTrigger(ScrollView);

export default class TopScreenView extends Component {
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
        <TriggerScrollView
          keyboardShouldPersistTaps="always"
          refreshControl={onRefresh && (
            <Refresh refreshing={refreshing} onRefresh={onRefresh} />
          )}
        >
          <View style={headerPadding ? styles.paddingView : styles.statusBarPaddingView} />
          {loading ? <LoadingIndicator /> : children}
        </TriggerScrollView>
      </SimpleScreenView>
    );
  }
}
