import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-navigation';

import SimpleScreenView from '../SimpleScreenView';
import scrollViewTrigger from '../../helpers/scrollViewTrigger';
import LoadingIndicator from '../LoadingIndicator';
import Refresh from '../Refresh';

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
        <TriggerScrollView
          keyboardShouldPersistTaps="always"
          refreshControl={onRefresh && (
            <Refresh refreshing={refreshing} onRefresh={onRefresh} />
          )}
        >
          {loading ? <LoadingIndicator /> : children}
        </TriggerScrollView>
      </SimpleScreenView>
    );
  }
}
