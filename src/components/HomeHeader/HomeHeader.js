import React from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';

import BasicHeader from '../BasicHeader';

import styles from './styles';

const HomeHeader = ({
  keyword,
  onKeywordChange,
  onOpenDrawer,
  onSearch,
  onOpenCart,
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
      icon: 'shopping-cart',
      onPress: onOpenCart,
    }}
  />
);

HomeHeader.propTypes = {
  keyword: PropTypes.string,
  onKeywordChange: PropTypes.func,
  onOpenDrawer: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  onOpenCart: PropTypes.func,
};

HomeHeader.defaultProps = {
  keyword: '',
  onKeywordChange: () => {},
  onSearch: () => {},
  onOpenCart: () => {},
};

export default HomeHeader;
