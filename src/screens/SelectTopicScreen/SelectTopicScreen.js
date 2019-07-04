import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import {
  pull,
  clone,
  flatten,
  intersection,
  difference,
} from 'lodash';
import i18n from 'i18n-js';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ListSelector from '../../components/ListSelector';

import styles from './styles';

export default class SelectTopicScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      categories: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            image: PropTypes.string,
            topics: PropTypes.shape({
              edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                  name: PropTypes.string,
                }),
              })),
            }),
          }),
        })),
      }),
    }),
  };

  static defaultProps = {
    query: null,
  };

  state ={
    initialized: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { initialized } = prevState;
    const { query } = nextProps;

    if (initialized || !query) {
      return null;
    }

    const categoryMap = new Map();
    query.categories.edges.forEach(({ node: { name, topics } }) => {
      topics.edges.forEach(({ node: { name: topic } }) => {
        categoryMap.set(topic, name);
      });
    });

    return { initialized: true, categoryMap };
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: clone(props.navigation.getParam('selected')) || [],
    };
  }

  handleSelect = (item, isSelected) => {
    const { navigation } = this.props;
    const { selected, categoryMap } = this.state;
    const multiple = navigation.getParam('multiple');
    const onSelect = navigation.getParam('onSelect');

    if (!multiple) {
      this.setState({ selected: item });

      if (onSelect) {
        onSelect(item, categoryMap.get(item));
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
    const { query } = this.props;

    if (!query) {
      return;
    }

    const selected = flatten(query.categories.edges.map(({ node: { topics } }) => (
      topics.edges.map(({ node: { name } }) => name)
    )));
    this.setState({ selected });
  };

  handleClear = () => {
    this.setState({ selected: [] });
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const { selected, categoryMap } = this.state;
    const onSelect = navigation.getParam('onSelect');

    if (onSelect) {
      const category = selected.length === 1
        ? categoryMap.get(selected[0])
        : null;
      onSelect(selected, category);
    }
    navigation.goBack();
  };

  handleCategoryPress = (category, topics) => {
    const { navigation } = this.props;
    const { selected } = this.state;
    const multiple = navigation.getParam('multiple');
    const onCategorySelect = navigation.getParam('onCategorySelect');

    if (!multiple) {
      if (onCategorySelect) {
        onCategorySelect(category);
      }

      return;
    }

    const diff = difference(selected, topics);

    if (selected.length - diff.length === topics.length) {
      this.setState({ selected: diff });
      return;
    }

    this.setState({ selected: intersection([...selected, ...topics]) });
  };

  renderSectionHeader = ({ section: { category, data } }) => (
    <TouchableOpacity
      style={styles.sectionHeaderContainer}
      onPress={() => this.handleCategoryPress(category, data)}
    >
      <Text style={styles.category}>
        {i18n.t(`categories.${category}`, { defaultValue: category })}
      </Text>
    </TouchableOpacity>
  );

  getItems = () => {
    const { query } = this.props;

    if (!query) {
      return [];
    }

    return query.categories.edges.map(({ node: { name, topics } }) => ({
      category: name,
      data: topics.edges.map(({ node: { name: topic } }) => topic),
    }));
  };

  render() {
    const { navigation } = this.props;
    const { selected } = this.state;
    const title = navigation.getParam('title') || i18n.t('selectTopic.title');
    const multiple = navigation.getParam('multiple');

    return (
      <TopScreenView
        {...this.props}
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
          items={this.getItems()}
          selected={selected}
          multiple={multiple}
          section
          i18nScope="topics"
          onSelect={this.handleSelect}
          renderSectionHeader={this.renderSectionHeader}
        />
      </TopScreenView>
    );
  }
}
