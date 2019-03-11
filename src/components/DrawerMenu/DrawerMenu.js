import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ViewPropTypes,
} from 'react-native';

import DrawerMenuItem from '../DrawerMenuItem';

import styles from './styles';

const DrawerMenu = ({
  style,
  title,
  children,
}) => (
  <View style={style}>
    {title ? (
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.headerSeperateLine} />
      </View>
    ) : null}
    {children && React.Children.map(children, (child) => {
      if (child.type !== DrawerMenuItem) {
        throw new Error('Child of DrawerMenu should be DrawerMenuItem only');
      }
      return (
        <View style={styles.itemContainer}>
          {child}
          <View style={styles.itemSeperateLine} />
        </View>
      );
    })}
  </View>
);

DrawerMenu.propTypes = {
  style: ViewPropTypes.style,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

DrawerMenu.defaultProps = {
  style: {},
  title: '',
};

export default DrawerMenu;
