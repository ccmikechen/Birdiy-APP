import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import styles from './styles';

const SearchBarButton = ({ onPress, value }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View>
      <View pointerEvents="none">
        <Searchbar
          value={value}
          style={styles.searchBar}
          placeholder="找專案"
        />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

SearchBarButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string,
};

SearchBarButton.defaultProps = {
  value: '',
};

export default SearchBarButton;
