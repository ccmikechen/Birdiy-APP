import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';

import BasicHeader from '../BasicHeader';

import styles from './styles';

const UserPostsHeader = ({
  onBack,
  onSearch,
  onReorder,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'arrow-back',
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
          placeholder="找我的投稿"
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
    )}
    rightButton={{
      icon: 'reorder',
      onPress: onReorder,
    }}
  />
);

UserPostsHeader.propTypes = {
  onBack: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onReorder: PropTypes.func.isRequired,
};

export default UserPostsHeader;
