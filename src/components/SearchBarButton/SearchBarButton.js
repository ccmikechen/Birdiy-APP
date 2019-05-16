import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import i18n from 'i18n-js';

import styles from './styles';

const SearchBarButton = ({ onPress, value, placeholder }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View>
      <View pointerEvents="none">
        <Searchbar
          value={value}
          style={styles.searchBar}
          placeholder={placeholder || i18n.t('searchBar.placeholder')}
        />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

SearchBarButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

SearchBarButton.defaultProps = {
  value: '',
  placeholder: null,
};

export default SearchBarButton;
