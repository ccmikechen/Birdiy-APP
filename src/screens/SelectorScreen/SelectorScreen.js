import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pull } from 'lodash';
import i18n from 'i18n-js';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ListSelector from '../../components/ListSelector';

export default class SelectorScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: props.navigation.getParam('selected'),
    };
  }

  handleSelect = (item, isSelected) => {
    const { navigation } = this.props;
    const { selected } = this.state;
    const multiple = navigation.getParam('multiple');
    const onSelect = navigation.getParam('onSelect');

    if (!multiple) {
      this.setState({ selected: item });

      if (onSelect) {
        onSelect(item);
      }
      navigation.goBack();

      return;
    }

    if (isSelected) {
      this.setState({ selected: [...selected, item] });

      return;
    }

    this.setState({ selected: pull(selected, item) });
  };

  handleSelectAll = () => {
    const { navigation } = this.props;
    const items = navigation.getParam('items');
    this.setState({ selected: items });
  };

  handleClear = () => {
    this.setState({ selected: [] });
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const { selected } = this.state;
    const onSelect = navigation.getParam('onSelect');

    if (onSelect) {
      onSelect(selected);
    }
    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const { selected } = this.state;
    const title = navigation.getParam('title') || '';
    const multiple = navigation.getParam('multiple') || false;
    const items = navigation.getParam('items') || [];
    const i18nScope = navigation.getParam('i18nScope');

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={title}
            rightButton={multiple ? [{
              text: i18n.t('general.selectAll'),
              onPress: this.handleSelectAll,
            }, {
              text: i18n.t('general.clear'),
              onPress: this.handleClear,
            }, {
              text: i18n.t('general.confirm'),
              onPress: this.handleSubmit,
            }] : null}
          />
        )}
        fullScreen
      >
        <ListSelector
          items={items}
          selected={selected}
          multiple={multiple}
          i18nScope={i18nScope}
          onSelect={this.handleSelect}
        />
      </TopScreenView>
    );
  }
}
