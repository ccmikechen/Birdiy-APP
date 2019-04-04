import React from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';

import BasicHeader from '../BasicHeader';

import styles from './styles';

const SearchHeader = ({
  keyword,
  onKeywordChange,
  onOpenDrawer,
  onSearch,
  onOpenFilter,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'menu',
      onPress: onOpenDrawer,
    }}
    centerComponent={() => (
      <Searchbar
        style={styles.searchBar}
        value={keyword}
        placeholder="找專案"
        onChangeText={onKeywordChange}
        onSubmitEditing={onSearch}
        onIconPress={onSearch}
      />
    )}
    rightButton={{
      icon: 'filter-list',
      onPress: onOpenFilter,
    }}
  />
);

SearchHeader.propTypes = {
  keyword: PropTypes.string,
  onKeywordChange: PropTypes.func,
  onOpenDrawer: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  onOpenFilter: PropTypes.func,
};

SearchHeader.defaultProps = {
  keyword: '',
  onKeywordChange: () => {},
  onSearch: () => {},
  onOpenFilter: () => {},
};

export default SearchHeader;
