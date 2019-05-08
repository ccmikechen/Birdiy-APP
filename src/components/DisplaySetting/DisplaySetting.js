import React from 'react';
import PropTypes from 'prop-types';

import SettingsList, {
  Header,
  Item,
} from 'react-native-settings-list';

import Colors from '../../constants/Colors';
import Size from '../../constants/Size';

import styles from './styles';

const DisplaySetting = (props) => {
  const {
    settings,
    onItemPress,
  } = props;

  return (
    <SettingsList borderColor={Colors.settingBorder}>
      <Header headerText="語言" />
      <Item
        title="介面語言"
        titleStyle={styles.title}
        titleInfo={settings.interfaceLanguage}
        itemWidth={Size.settingItemHeight}
        onPress={() => onItemPress('interfaceLanguage')}
      />
      <Item
        title="顯示專案語言"
        titleStyle={styles.title}
        itemWidth={Size.settingItemHeight}
        onPress={() => onItemPress('displayProjectsLanguage')}
      />
      <Item
        title="顯示投稿語言"
        titleStyle={styles.title}
        itemWidth={Size.settingItemHeight}
        onPress={() => onItemPress('displayPostsLanguage')}
      />
    </SettingsList>
  );
};

DisplaySetting.propTypes = {
  settings: PropTypes.shape({
    interfaceLanguage: PropTypes.string.isRequired,
  }).isRequired,
  onItemPress: PropTypes.func,
};

DisplaySetting.defaultProps = {
  onItemPress: () => {},
};

export default DisplaySetting;
