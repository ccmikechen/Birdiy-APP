import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View } from 'react-native';
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
      onPress: onOpenDrawer,
    }}
    centerComponent={() => (
      <TouchableWithoutFeedback onPress={onSearch}>
        <View>
          <View pointerEvents="none">
            <Searchbar
              style={styles.searchBar}
              placeholder="找專案"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
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
