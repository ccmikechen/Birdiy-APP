import React from 'react';
import PropTypes from 'prop-types';
import MaterialTabs from 'react-native-material-tabs';

import { TextColor } from '../../constants/Colors';

import styles from './styles';

const NormalTabBar = (props) => {
  const { tabs, index, onChange } = props;

  return (
    <MaterialTabs
      {...props}
      style={styles.tabBar}
      items={tabs}
      selectedIndex={index}
      barColor="transparent"
      activeTextColor={TextColor.primaryDark}
      inactiveTextColor={TextColor.subDark}
      indicatorColor="transparent"
      onChange={onChange}
    />
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
