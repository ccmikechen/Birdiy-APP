import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';

import BasicHeader from '../BasicHeader';

import styles from './styles';

export default class SearchDetailHeader extends Component {
  static propTypes = {
    keyword: PropTypes.string,
    onKeywordChange: PropTypes.func,
    onBack: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onOpenFilter: PropTypes.func,
  };

  static defaultProps = {
    keyword: '',
    onKeywordChange: () => {},
    onOpenFilter: () => {},
  };

  focusSearchBar = () => {
    this.searchBar.focus();
  };

  blurSearchBar = () => {
    this.searchBar.blur();
  };

  render() {
    const {
      onKeywordChange,
      onBack,
      onOpenFilter,
      onSearch,
      keyword,
    } = this.props;

    return (
      <BasicHeader
        placement="center"
        leftButton={{
          icon: 'arrow-back',
          onPress: onBack,
        }}
        centerComponent={() => (
          <Searchbar
            ref={(searchBar) => { this.searchBar = searchBar; }}
            style={styles.searchBar}
            value={keyword}
            placeholder="找專案"
            onChangeText={onKeywordChange}
            onSubmitEditing={onSearch}
          />
        )}
        rightButton={{
          icon: 'filter-list',
          onPress: onOpenFilter,
        }}
      />
    );
  }
}
