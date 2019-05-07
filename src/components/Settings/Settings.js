import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';
import SettingsList, {
  Header,
  Item,
} from 'react-native-settings-list';

import Colors, { TextColor } from '../../constants/Colors';

import styles from './styles';

export default class Settings extends Component {
  static propTypes = {
    logoutButtonVisible: PropTypes.bool,
    onProfile: PropTypes.func.isRequired,
    onAccount: PropTypes.func.isRequired,
    onDisplay: PropTypes.func.isRequired,
    onNotification: PropTypes.func.isRequired,
    onAbout: PropTypes.func.isRequired,
    onFeedback: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
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
      onProfile,
      onAccount,
      onDisplay,
      onNotification,
      onAbout,
      onFeedback,
      onLogout,
    } = this.props;

    return (
      <SettingsList borderColor="#c8c7cc">
        <Item
          title="編輯個人檔案"
          titleStyle={styles.title}
          itemWidth={60}
          icon={this.renderIcon(Icon.AntDesign, 'profile')}
          onPress={onProfile}
        />
        <Item
          title="編輯帳戶"
          titleStyle={styles.title}
          itemWidth={60}
          icon={this.renderIcon(Icon.MaterialCommunityIcons, 'account')}
          onPress={onAccount}
        />
        <Item
          title="顯示設定"
          titleStyle={styles.title}
          itemWidth={60}
          icon={this.renderIcon(Icon.MaterialIcons, 'smartphone')}
          onPress={onDisplay}
        />
        <Item
          title="通知設定"
          titleStyle={styles.title}
          itemWidth={60}
          icon={this.renderIcon(Icon.MaterialIcons, 'notifications')}
          onPress={onNotification}
        />
        <Item
          title="關於Birdiy"
          titleStyle={styles.title}
          itemWidth={60}
          icon={this.renderIcon(Icon.MaterialIcons, 'info')}
          onPress={onAbout}
        />
        <Item
          title="意見回饋"
          titleStyle={styles.title}
          itemWidth={60}
          icon={this.renderIcon(Icon.MaterialIcons, 'feedback')}
          onPress={onFeedback}
        />
        {logoutButtonVisible && (
          <Header headerStyle={{ marginTop: 15 }} />
        )}
        {logoutButtonVisible && (
          <Item
            title="登出"
            titleStyle={[styles.title, styles.logoutTitle]}
            itemWidth={60}
            icon={this.renderIcon(Icon.MaterialCommunityIcons, 'logout', Colors.logoutButton)}
            onPress={onLogout}
            hasNavArrow={false}
          />
        )}
      </SettingsList>
    );
  }
}
