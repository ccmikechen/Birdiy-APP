import React from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';

import BasicHeader from '../BasicHeader';

import styles from './styles';

const HomeHeader = ({
  onOpenDrawer,
  onSearch,
  onOpenCart,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'menu',
      color: '#ffffff',
      onPress: onOpenDrawer,
    }}
    centerComponent={() => (
      <Searchbar
        style={styles.searchBar}
        placeholder="找作法、材料"
        onFocus={() => onSearch()}
      />
    )}
    rightButton={{
      icon: 'shopping-cart',
      color: '#ffffff',
      onPress: onOpenCart,
    }}
  />
);

HomeHeader.propTypes = {
  onOpenDrawer: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onOpenCart: PropTypes.func.isRequired,
};

export default HomeHeader;
