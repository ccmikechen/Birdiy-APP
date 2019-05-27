import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import i18n from 'i18n-js';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

import Colors from '../../constants/Colors';

import styles from './styles';

const SearchHeader = (props) => {
  const {
    keyword,
    topics,
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
    color: topics.length > 1
      ? Colors.activeHeaderIcon
      : Colors.headerIcon,
  };
  const showTopic = !keyword && topics.length === 1 && categories.length === 1;
  const showCategory = !keyword && topics.length === 0 && categories.length === 1;
  const topic = showTopic && i18n.t(`topics.${topics[0]}`, { defaultValue: topics[0] });
  const category = (showTopic || showCategory) && i18n.t(`categories.${categories[0]}`, { defaultValue: categories[0] });

  return (
    <BasicHeader
      placement="center"
      centerComponent={() => {
        if (showCategory) {
          return (
            <Text style={styles.category}>{category}</Text>
          );
        } if (showTopic) {
          return (
            <View>
              <Text style={styles.categorySub}>{category}</Text>
              <Text style={styles.topic}>{topic}</Text>
            </View>
          );
        }
        return (
          <SearchBarButton
            onPress={onSearch}
            value={keyword}
          />
        );
      }}
      rightButton={
        showTopic || showCategory
          ? [searchButton, filterButton]
          : [filterButton]
      }
    />
  );
};


SearchHeader.propTypes = {
  keyword: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
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
