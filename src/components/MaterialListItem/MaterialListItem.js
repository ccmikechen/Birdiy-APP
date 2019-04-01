import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';

import styles from './styles';

const MaterialListItem = ({
  material,
  onLinkPress,
  onAddPress,
}) => (
  <View style={styles.container}>
    <View style={styles.nameContainer}>
      <Text style={styles.name}>
        {material.name}
      </Text>
    </View>
    <View style={styles.amountContainer}>
      <Text style={styles.amount}>
        {material.amount}
      </Text>
    </View>
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        {material.link && (
          <TouchableOpacity
            style={styles.linkButton}
            onPress={onLinkPress}
          >
            <Icon.FontAwesome
              name="external-link"
              size={26}
              color={Colors.headerIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPres={onAddPress}>
          <Icon.MaterialIcons
            name="add-shopping-cart"
            size={26}
            color={Colors.headerIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

MaterialListItem.propTypes = {
  material: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
  onLinkPress: PropTypes.func,
  onAddPress: PropTypes.func,
};

MaterialListItem.defaultProps = {
  onLinkPress: () => {},
  onAddPress: () => {},
};

export default MaterialListItem;
