import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';

import BasicHeader from '../BasicHeader';

import styles from './styles';

const TimelineHeader = ({
  onOpenDrawer,
  onSearch,
  onOpenFilter,
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
          placeholder="找用戶"
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
    )}
    rightButton={{
      icon: 'filter-list',
      color: '#ffffff',
      onPress: onOpenFilter,
    }}
  />
);

TimelineHeader.propTypes = {
  onOpenDrawer: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onOpenFilter: PropTypes.func.isRequired,
};

export default TimelineHeader;
