import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

import Colors from '../../constants/Colors';

import styles from './styles';

const SearchHeader = (props) => {
  const {
    keyword,
    categories,
    onOpenDrawer,
    onSearch,
    onOpenFilter,
  } = props;

  const searchButton = {
    icon: 'search',
    onPress: onSearch,
  };
  const filterButton = {
    icon: 'filter-list',
    onPress: onOpenFilter,
    color: categories.length > 1
      ? Colors.activeHeaderIcon
      : Colors.headerIcon,
  };
  const showCategory = !keyword && categories.length === 1;

  return (
    <BasicHeader
      placement="center"
      leftButton={{
        icon: 'menu',
        onPress: onOpenDrawer,
      }}
      centerComponent={() => (showCategory ? (
        <Text style={styles.title}>{categories[0]}</Text>
      ) : (
        <SearchBarButton
          onPress={onSearch}
          value={keyword}
        />
      ))}
      rightButton={
        showCategory ? [searchButton, filterButton] : [filterButton]
      }
    />
  );
};


SearchHeader.propTypes = {
  keyword: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOpenDrawer: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  onOpenFilter: PropTypes.func,
};

SearchHeader.defaultProps = {
  keyword: '',
  onSearch: () => {},
  onOpenFilter: () => {},
};

export default SearchHeader;
