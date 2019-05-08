import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';
import SettingsList, {
  Header,
  Item,
} from 'react-native-settings-list';

import Colors, { TextColor } from '../../constants/Colors';
import Size from '../../constants/Size';

import styles from './styles';

export default class Settings extends Component {
  static propTypes = {
    logoutButtonVisible: PropTypes.bool,
    onItemPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    logoutButtonVisible: false,
  };

  renderIcon = (IconComponent, name, color = TextColor.secondaryDark) => (
    <View style={styles.icon}>
      <IconComponent
        name={name}
        size={30}
        color={color}
      />
    </View>
  );

  render() {
    const {
      logoutButtonVisible,
      onItemPress,
    } = this.props;

    return (
      <SettingsList borderColor={Colors.settingBorder}>
        <Item
          title="編輯個人檔案"
          titleStyle={styles.title}
          itemWidth={Size.settingItemHeight}
          icon={this.renderIcon(Icon.AntDesign, 'profile')}
          onPress={() => onItemPress('profile')}
        />
        <Item
          title="編輯帳戶"
          titleStyle={styles.title}
          itemWidth={Size.settingItemHeight}
          icon={this.renderIcon(Icon.MaterialCommunityIcons, 'account')}
          onPress={() => onItemPress('account')}
        />
        <Item
          title="顯示設定"
          titleStyle={styles.title}
          itemWidth={Size.settingItemHeight}
          icon={this.renderIcon(Icon.MaterialIcons, 'smartphone')}
          onPress={() => onItemPress('display')}
        />
        <Item
          title="通知設定"
          titleStyle={styles.title}
          itemWidth={Size.settingItemHeight}
          icon={this.renderIcon(Icon.MaterialIcons, 'notifications')}
          onPress={() => onItemPress('notification')}
        />
        <Item
          title="關於Birdiy"
          titleStyle={styles.title}
          itemWidth={Size.settingItemHeight}
          icon={this.renderIcon(Icon.MaterialIcons, 'info')}
          onPress={() => onItemPress('about')}
        />
        <Item
          title="意見回饋"
          titleStyle={styles.title}
          itemWidth={Size.settingItemHeight}
          icon={this.renderIcon(Icon.MaterialIcons, 'feedback')}
          onPress={() => onItemPress('feedback')}
        />
        {logoutButtonVisible && (
          <Header headerStyle={{ marginTop: 15 }} />
        )}
        {logoutButtonVisible && (
          <Item
            title="登出"
            titleStyle={[styles.title, styles.logoutTitle]}
            itemWidth={Size.settingItemHeight}
            icon={this.renderIcon(Icon.MaterialCommunityIcons, 'logout', Colors.logoutButton)}
            onPress={() => onItemPress('logout')}
            hasNavArrow={false}
          />
        )}
      </SettingsList>
    );
  }
}
