import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

const HomeHeader = ({
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
      <SearchBarButton onPress={onSearch} />
    )}
    rightButton={{
      icon: 'shopping-cart',
      onPress: onOpenCart,
    }}
  />
);

HomeHeader.propTypes = {
  onOpenDrawer: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  onOpenCart: PropTypes.func,
};

HomeHeader.defaultProps = {
  onSearch: () => {},
  onOpenCart: () => {},
};

export default HomeHeader;
