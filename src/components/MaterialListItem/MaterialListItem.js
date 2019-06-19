import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';

import ToggleButton from '../ToggleButton';

import { Primary } from '../../constants/Colors';

import styles from './styles';

const MaterialListItem = ({
  material,
  isInCart,
  onLinkPress,
  onCartToggle,
}) => (
  <View style={styles.container}>
    <View style={styles.nameContainer}>
      <Text style={styles.name}>
        {material.name}
      </Text>
    </View>
    <View style={styles.amountContainer}>
      <Text style={styles.amount}>
        {material.amountUnit}
      </Text>
    </View>
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        {material.url && (
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => onLinkPress(material.url)}
          >
            <Icon.FontAwesome
              name="external-link"
              size={26}
              color={Primary(700)}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <ToggleButton
          checked={isInCart}
          onPress={() => onCartToggle(!isInCart)}
        />
      </View>
    </View>
  </View>
);

MaterialListItem.propTypes = {
  material: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amountUnit: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
  isInCart: PropTypes.bool,
  onLinkPress: PropTypes.func,
  onCartToggle: PropTypes.func,
};

MaterialListItem.defaultProps = {
  isInCart: false,
  onLinkPress: () => {},
  onCartToggle: () => {},
};

export default MaterialListItem;
