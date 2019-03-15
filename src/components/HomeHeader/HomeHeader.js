import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
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
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => onSearch()}
        activeOpacity={0.9}
      >
        <Searchbar
          style={styles.searchBar}
          placeholder="找項目、點子"
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
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
