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
    topics,
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
    color: topics.length > 1
      ? Colors.activeHeaderIcon
      : Colors.headerIcon,
  };
  const showTopic = !keyword && topics.length === 1;

  return (
    <BasicHeader
      placement="center"
      centerComponent={() => (showTopic ? (
        <Text style={styles.title}>
          {i18n.t(`topics.${topics[0]}`, { defaultValue: topics[0] })}
        </Text>
      ) : (
        <SearchBarButton
          onPress={onSearch}
          value={keyword}
        />
      ))}
      rightButton={
        showTopic ? [searchButton, filterButton] : [filterButton]
      }
    />
  );
};


SearchHeader.propTypes = {
  keyword: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSearch: PropTypes.func,
  onOpenFilter: PropTypes.func,
};

SearchHeader.defaultProps = {
  keyword: '',
  onSearch: () => {},
  onOpenFilter: () => {},
};

export default SearchHeader;
