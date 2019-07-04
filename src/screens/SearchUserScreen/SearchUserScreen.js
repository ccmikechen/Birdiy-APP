import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import TopScreenView from '../../components/TopScreenView';
import SearchDetailHeader from '../../components/SearchDetailHeader';

export default class SearchUserScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    searchText: '',
  };

  handleSearch = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    const { navigation } = this.props;
    const { searchText } = this.state;

    return (
      <TopScreenView
        {...this.props}
        renderHeader={() => (
          <SearchDetailHeader
            ref={(header) => { this.header = header; }}
            onBack={() => navigation.goBack()}
            onSearch={this.handleSearch}
            placeholder="找用戶"
          />
        )}
      >
        <NavigationEvents onDidFocus={() => this.header.focusSearchBar()} />
        <Text>{searchText}</Text>
      </TopScreenView>
    );
  }
}
