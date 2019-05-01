import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';

import BasicHeader from '../BasicHeader';

import Colors from '../../constants/Colors';

import styles from './styles';

const UserProjectsHeader = ({
  onBack,
  onSearch,
  onOpenFilter,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'arrow-back',
      color: Colors.headerIcon,
      onPress: onBack,
    }}
    centerComponent={() => (
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => onSearch()}
        activeOpacity={0.9}
      >
        <Searchbar
          style={styles.searchBar}
          placeholder="找我的專案"
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
    )}
    rightButton={{
      icon: 'filter-list',
      color: Colors.headerIcon,
      onPress: onOpenFilter,
    }}
  />
);

UserProjectsHeader.propTypes = {
  onBack: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onOpenFilter: PropTypes.func.isRequired,
};

export default UserProjectsHeader;
