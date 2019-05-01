import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import SimpleScreenView from '../SimpleScreenView';
import scrollViewTrigger from '../../helpers/scrollViewTrigger';
import LoadingIndicator from '../LoadingIndicator';

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
  };

  static defaultProps = {
    children: null,
    loading: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ isTabBarVisible: true });
  }

  render() {
    const { children, loading } = this.props;

    return (
      <SimpleScreenView {...this.props}>
        <TriggerScrollView>
          <View style={styles.paddingView} />
          {loading ? <LoadingIndicator /> : children}
        </TriggerScrollView>
      </SimpleScreenView>
    );
  }
}
