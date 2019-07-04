import React, { Component } from 'react';

import TopScreenView from '../../components/TopScreenView';
import NormalTopHeader from '../../components/NormalTopHeader';

export default class NotificationScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <TopScreenView
        {...this.props}
        renderHeader={() => (
          <NormalTopHeader title="通知" />
        )}
      />
    );
  }
}
