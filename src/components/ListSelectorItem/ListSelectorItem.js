import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'expo';

import { Primary } from '../../constants/Colors';

import styles from './styles';

const ListSelectorItem = ({ text, selected, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
    {selected && (
      <View style={styles.selectedIconContainer}>
        <Icon.MaterialIcons
          name="check"
          size={26}
          color={Primary(700)}
        />
      </View>
    )}
  </TouchableOpacity>
);

ListSelectorItem.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
};

ListSelectorItem.defaultProps = {
  selected: false,
  onPress: () => {},
};

export default ListSelectorItem;
