import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationEvents } from 'react-navigation';

import TopScreenView from '../../components/TopScreenView';
import SearchDetailHeader from '../../components/SearchDetailHeader';

export default class SearchDetailScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    keyword: '',
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      keyword: navigation.getParam('keyword') || '',
    });
  }

  handleSearch = () => {
    const { navigation } = this.props;
    const { keyword } = this.state;
    navigation.navigate('Projects', { keyword });
  };

  render() {
    const { navigation } = this.props;
    const { keyword } = this.state;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <SearchDetailHeader
            ref={(header) => { this.header = header; }}
            keyword={keyword}
            onKeywordChange={value => this.setState({ keyword: value })}
            onBack={() => navigation.goBack()}
            onSearch={this.handleSearch}
          />
        )}
      >
        <NavigationEvents onDidFocus={() => this.header.focusSearchBar()} />
      </TopScreenView>
    );
  }
}
