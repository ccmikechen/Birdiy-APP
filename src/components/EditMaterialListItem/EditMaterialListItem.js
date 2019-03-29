import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';
import { Surface } from 'react-native-paper';

import PureTextInput from '../PureTextInput';

import styles from './styles';

import Colors from '../../constants/Colors';

const EditMaterialListItem = ({
  data,
  onChange,
  onMoveUp,
  onMoveDown,
  onDelete,
}) => (
  <Surface style={styles.container}>
    <View style={styles.infoContainer}>
      <View style={styles.nameContainer}>
        <PureTextInput
          value={data.name}
          placeholder="材料名"
          onChangeText={(value) => {
            onChange({ ...data, name: value });
          }}
        />
      </View>
      <View style={styles.amountContainer}>
        <PureTextInput
          value={data.amount}
          placeholder="數量單位"
          onChangeText={(value) => {
            onChange({ ...data, amount: value });
          }}
        />
      </View>
    </View>
    <View style={styles.linkContainer}>
      <View style={styles.iconContainer}>
        <Icon.Entypo
          name="shop"
          size={26}
          color={Colors.headerIcon}
        />
      </View>
      <PureTextInput
        value={data.link}
        placeholder="（可選）商店或購買連結"
        onChangeText={(value) => {
          onChange({ ...data, link: value });
        }}
      />
    </View>
    <View style={styles.optionsContainer}>
      <View style={styles.moveContainer}>
        <TouchableOpacity
          style={styles.moveButtonContainer}
          onPress={onMoveUp}
        >
          <Icon.MaterialIcons
            name="arrow-upward"
            size={26}
            color="#ffffff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.moveButtonContainer}
          onPress={onMoveDown}
        >
          <Icon.MaterialIcons
            name="arrow-downward"
            size={26}
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.deleteContainer}
        onPress={onDelete}
      >
        <Icon.MaterialIcons
          name="close"
          size={26}
          color="#ffffff"
        />
      </TouchableOpacity>
    </View>
  </Surface>
);

EditMaterialListItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func,
  onMoveUp: PropTypes.func,
  onMoveDown: PropTypes.func,
  onDelete: PropTypes.func,
};

EditMaterialListItem.defaultProps = {
  onChange: () => {},
  onMoveUp: () => {},
  onMoveDown: () => {},
  onDelete: () => {},
};

export default EditMaterialListItem;
