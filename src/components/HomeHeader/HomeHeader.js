import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

const HomeHeader = ({
  onSearch,
  onOpenCart,
}) => (
  <BasicHeader
    placement="center"
    centerComponent={() => (
      <SearchBarButton onPress={onSearch} />
    )}
    rightButton={{
      icon: 'shopping-cart',
      onPress: onOpenCart,
    }}
  />
);

HomeHeader.propTypes = {
  onSearch: PropTypes.func,
  onOpenCart: PropTypes.func,
};

HomeHeader.defaultProps = {
  onSearch: () => {},
  onOpenCart: () => {},
};

export default HomeHeader;
