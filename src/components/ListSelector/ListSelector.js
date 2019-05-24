import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import i18n from 'i18n-js';

import ListSelectorItem from '../ListSelectorItem';

const generateSelectionMap = (items, selected) => {
  const selectionMap = new Map(items.map(item => [item, false]));

  if (Array.isArray(selected)) {
    selected.forEach(item => selectionMap.set(item, true));
  } else {
    selectionMap.set(selected, true);
  }

  return selectionMap;
};

export default class ListSelector extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    multiple: PropTypes.bool,
    onSelect: PropTypes.func,
    i18nScope: PropTypes.string,
  };

  static defaultProps = {
    items: [],
    selected: null,
    multiple: false,
    onSelect: () => {},
    i18nScope: undefined,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { items, selected } = nextProps;

    return {
      ...prevState,
      selectionMap: generateSelectionMap(items, selected),
    };
  }

  constructor(props) {
    super(props);

    const { items, selected } = props;
    this.state = {
      selectionMap: generateSelectionMap(items, selected),
    };
  }

  handleItemPress = (item, selected) => () => {
    const { onSelect, multiple } = this.props;

    if (multiple) {
      onSelect(item, !selected);
    } else {
      onSelect(item, true);
    }
  };

  renderItem = ({ item }) => {
    const { i18nScope } = this.props;
    const { selectionMap } = this.state;

    const selected = selectionMap.get(item);

    return (
      <ListSelectorItem
        text={i18n.t(item, { scope: i18nScope })}
        selected={selected}
        onPress={this.handleItemPress(item, selected)}
      />
    );
  };

  render() {
    const {
      multiple,
      selected,
      items,
      ...restProps
    } = this.props;

    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        extraData={this.props}
        keyExtractor={item => item}
        {...restProps}
      />
    );
  }
}
