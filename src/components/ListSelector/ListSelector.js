import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, SectionList } from 'react-native';
import { flatten } from 'lodash';
import i18n from 'i18n-js';

import ListSelectorItem from '../ListSelectorItem';

const generateSelectionMap = (items, selected, section) => {
  const selectionMap = section
    ? new Map(flatten(items.map(({ data }) => data.map(item => [item, false]))))
    : new Map(items.map(item => [item, false]));

  if (Array.isArray(selected)) {
    selected.forEach(item => selectionMap.set(item, true));
  } else {
    selectionMap.set(selected, true);
  }

  return selectionMap;
};

export default class ListSelector extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    ])),
    selected: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    multiple: PropTypes.bool,
    section: PropTypes.bool,
    onSelect: PropTypes.func,
    i18nScope: PropTypes.string,
  };

  static defaultProps = {
    items: [],
    selected: null,
    multiple: false,
    section: false,
    onSelect: () => {},
    i18nScope: undefined,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { items, selected, section } = nextProps;

    return {
      ...prevState,
      selectionMap: generateSelectionMap(items, selected, section),
    };
  }

  constructor(props) {
    super(props);

    const { items, selected, section } = props;
    this.state = {
      selectionMap: generateSelectionMap(items, selected, section),
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
        text={i18n.t(item, { scope: i18nScope, defaultValue: item })}
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
      section,
      ...restProps
    } = this.props;

    const listProps = {
      renderItem: this.renderItem,
      extraData: this.props,
      keyExtractor: item => item,
      ...restProps,
    };

    return section ? (
      <SectionList
        sections={items}
        {...listProps}
      />
    ) : (
      <FlatList
        data={items}
        {...listProps}
      />
    );
  }
}
