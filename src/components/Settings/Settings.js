import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'expo';
import SettingsList, {
  Header,
  Item,
} from 'react-native-settings-list';

import Colors, { TextColor } from '../../constants/Colors';

import styles from './styles';

export default class Settings extends Component {
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
    return (
      <SettingsList borderColor="#c8c7cc">
        <Item
          title="編輯個人檔案"
          titleStyle={styles.title}
          itemWidth={70}
          icon={this.renderIcon(Icon.AntDesign, 'profile')}
          onPress={() => { this.actionSheet.show(); }}
        />
        <Item
          title="編輯帳戶"
          titleStyle={styles.title}
          itemWidth={70}
          icon={this.renderIcon(Icon.MaterialCommunityIcons, 'account')}
        />
        <Item
          title="顯示設定"
          titleStyle={styles.title}
          itemWidth={70}
          icon={this.renderIcon(Icon.MaterialIcons, 'smartphone')}
        />
        <Item
          title="通知設定"
          titleStyle={styles.title}
          itemWidth={70}
          icon={this.renderIcon(Icon.MaterialIcons, 'notifications')}
        />
        <Item
          title="關於Birdiy"
          titleStyle={styles.title}
          itemWidth={70}
          icon={this.renderIcon(Icon.MaterialIcons, 'info')}
        />
        <Item
          title="意見回饋"
          titleStyle={styles.title}
          itemWidth={70}
          icon={this.renderIcon(Icon.MaterialIcons, 'feedback')}
        />
        <Header headerStyle={{ marginTop: 15 }} />
        <Item
          title="登出"
          titleStyle={[styles.title, styles.logoutTitle]}
          itemWidth={70}
          icon={this.renderIcon(Icon.MaterialCommunityIcons, 'logout', Colors.logoutButton)}
        />
      </SettingsList>
    );
  }
}
