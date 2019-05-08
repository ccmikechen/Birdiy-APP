import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

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
        <SearchBarButton
          onPress={onSearch}
          value={keyword}
        />
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
