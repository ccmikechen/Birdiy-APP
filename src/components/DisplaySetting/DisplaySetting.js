import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';

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
      <Header headerText={i18n.t('settings.display.language.title')} />
      <Item
        title={i18n.t('settings.display.language.interface.title')}
        titleStyle={styles.title}
        titleInfo={
          i18n.t(`languages.${settings.interfaceLanguage}`)
        }
        itemWidth={Size.settingItemHeight}
        onPress={() => onItemPress('interfaceLanguage')}
      />
      {/* <Item */}
      {/*   title={i18n.t('settings.display.language.displayProjects.title')} */}
      {/*   titleStyle={styles.title} */}
      {/*   itemWidth={Size.settingItemHeight} */}
      {/*   onPress={() => onItemPress('displayProjectsLanguage')} */}
      {/* /> */}
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
