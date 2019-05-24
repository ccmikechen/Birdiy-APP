import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-navigation';
import i18n from 'i18n-js';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import SelectableCategoriesTable from '../../components/SelectableCategoriesTable';

import styles from './styles';

const i18nOptions = { scope: 'selectCategory' };

export default class SelectCategoryScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    selection: [],
  };

  constructor(props) {
    super(props);

    const categories = props.navigation.getParam('categories');
    const selected = props.navigation.getParam('selected');
    const selection = selected
      ? categories.map(({ name }) => selected.includes(name))
      : new Array(categories.length).fill(false);
    this.state = { selection };
  }

  handleSelect = (index) => {
    const { navigation } = this.props;
    const { selection } = this.state;
    const multipleSelect = navigation.getParam('multipleSelect') || false;

    if (multipleSelect) {
      selection[index] = !selection[index];
      this.setState({ selection });
    } else {
      const onSelect = navigation.getParam('onSelect');
      onSelect(index);
      navigation.goBack();
    }
  };

  handleSelectAll = () => {
    const { selection } = this.state;
    this.setState({ selection: selection.fill(true) });
  };

  handleClear = () => {
    const { selection } = this.state;
    this.setState({ selection: selection.fill(false) });
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const { selection } = this.state;
    const onSelect = navigation.getParam('onSelect');
    onSelect(selection);
    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const { selection } = this.state;
    const categories = navigation.getParam('categories');
    const multipleSelect = navigation.getParam('multipleSelect') || false;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('title', i18nOptions)}
            rightButton={multipleSelect ? [{
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
        <ScrollView style={styles.container}>
          <SelectableCategoriesTable
            categories={categories}
            onSelect={this.handleSelect}
            selection={selection}
            multipleSelect={multipleSelect}
          />
        </ScrollView>
      </TopScreenView>
    );
  }
}
