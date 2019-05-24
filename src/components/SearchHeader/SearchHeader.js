import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import i18n from 'i18n-js';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

import Colors from '../../constants/Colors';

import styles from './styles';

const SearchHeader = (props) => {
  const {
    keyword,
    categories,
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
      centerComponent={() => (showCategory ? (
        <Text style={styles.title}>
          {i18n.t(`categories.${categories[0]}`, { defaultValue: categories[0] })}
        </Text>
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
  onSearch: PropTypes.func,
  onOpenFilter: PropTypes.func,
};

SearchHeader.defaultProps = {
  keyword: '',
  onSearch: () => {},
  onOpenFilter: () => {},
};

export default SearchHeader;
