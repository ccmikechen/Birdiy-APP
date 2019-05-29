import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Updates } from 'expo';
import i18n from 'i18n-js';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import DisplaySetting from '../../components/DisplaySetting';

import LANGUAGES from '../../constants/languages';

import locale from '../../locales';

const i18nOptions = { scope: 'settings.display' };

export default class DisplaySettingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    settings: {
      interfaceLanguage: 'en',
    },
  };

  componentDidMount() {
    const appLocale = locale.getAppLocale();
    this.setState({
      settings: {
        interfaceLanguage: appLocale,
        projectLanguages: [],
      },
    });
  }

  handleItemPress = (item) => {
    const { navigation } = this.props;
    const { settings } = this.state;

    switch (item) {
      case 'interfaceLanguage':
        navigation.push('SelectorModal', {
          title: i18n.t('language.interface.title', i18nOptions),
          items: LANGUAGES,
          selected: settings.interfaceLanguage,
          i18nScope: 'languages',
          onSelect: (language) => {
            if (language === settings.interfaceLanguage) {
              return;
            }
            locale.setAppLocale(language).then(() => Updates.reload());
          },
        });
        break;
      case 'displayProjectsLanguage':
        navigation.push('SelectorModal', {
          title: i18n.t('language.displayProjects.title', i18nOptions),
          items: LANGUAGES,
          selected: settings.projectLanguages,
          multiple: true,
          i18nScope: 'languages',
          onSelect: () => {},
        });
        break;
      default:
    }
  };

  render() {
    const { navigation } = this.props;
    const { settings } = this.state;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('title', i18nOptions)}
          />
        )}
        fullScreen
      >
        <DisplaySetting
          settings={settings}
          onItemPress={this.handleItemPress}
        />
      </TopScreenView>
    );
  }
}
