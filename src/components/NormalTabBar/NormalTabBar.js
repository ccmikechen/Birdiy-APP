import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import MaterialTabs from 'react-native-material-tabs';

import { TextColor, Secondary } from '../../constants/Colors';

import styles from './styles';

const NormalTabBar = (props) => {
  const { tabs, index, onChange } = props;

  return (
    <View style={styles.container}>
      <MaterialTabs
        {...props}
        items={tabs}
        selectedIndex={index}
        barColor="transparent"
        activeTextColor={Secondary(500)}
        activeTextStyle={{ fontWeight: '600' }}
        inactiveTextColor={TextColor.subDark}
        indicatorColor={Secondary(500)}
        onChange={onChange}
      />
    </View>
  );
};

NormalTabBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func,
};

NormalTabBar.defaultProps = {
  index: 0,
  onChange: () => {},
};

export default NormalTabBar;
