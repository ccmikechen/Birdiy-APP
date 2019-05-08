import React from 'react';
import PropTypes from 'prop-types';

import SettingsList, {
  Item,
} from 'react-native-settings-list';

import Colors from '../../constants/Colors';
import Size from '../../constants/Size';

import styles from './styles';

const NotificationSetting = (props) => {
  const {
    settings,
    onChange,
  } = props;

  return (
    <SettingsList borderColor={Colors.settingBorder}>
      <Item
        title="接收通知"
        titleStyle={styles.title}
        itemWidth={Size.settingItemHeight}
        hasNavArrow={false}
        hasSwitch
        switchState={settings.showNotification}
        switchOnValueChange={value => onChange({ showNotification: value })}
      />
    </SettingsList>
  );
};

NotificationSetting.propTypes = {
  settings: PropTypes.shape({
    showNotification: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func,
};

NotificationSetting.defaultProps = {
  onChange: () => {},
};

export default NotificationSetting;
