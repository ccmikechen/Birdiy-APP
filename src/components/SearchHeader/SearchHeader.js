import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import BasicHeader from '../BasicHeader';

import styles from './styles';

const SearchHeader = (props) => {
  const {
    keyword,
    onOpenDrawer,
    onSearch,
    onOpenFilter,
  } = props;

  return (
    <BasicHeader
      placement="center"
      leftButton={{
        icon: 'menu',
        onPress: onOpenDrawer,
      }}
      centerComponent={() => (
        <TouchableWithoutFeedback onPress={onSearch}>
          <View>
            <View pointerEvents="none">
              <Searchbar
                style={styles.searchBar}
                value={keyword}
                placeholder="找專案"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
      rightButton={{
        icon: 'filter-list',
        onPress: onOpenFilter,
      }}
    />
  );
};


SearchHeader.propTypes = {
  keyword: PropTypes.string,
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
