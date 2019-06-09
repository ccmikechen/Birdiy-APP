import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';
import i18n from 'i18n-js';

import BasicHeader from '../BasicHeader';

import { Tertiary } from '../../constants/Colors';

import styles from './styles';

export default class SearchDetailHeader extends Component {
  static propTypes = {
    keyword: PropTypes.string,
    onKeywordChange: PropTypes.func,
    onBack: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    keyword: '',
    onKeywordChange: () => {},
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
            placeholder={i18n.t('searchBar.placeholder')}
            onChangeText={onKeywordChange}
            onSubmitEditing={onSearch}
            selectionColor={Tertiary(500)}
          />
        )}
      />
    );
  }
}
