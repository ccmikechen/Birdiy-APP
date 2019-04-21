import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import SelectableCategoriesTable from '../../components/SelectableCategoriesTable';

import styles from './styles';

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
            title="選擇分類"
            rightButton={multipleSelect ? {
              icon: 'check',
              onPress: this.handleSubmit,
            } : null}
          />
        )}
        fullScreen
      >
        <ScrollView style={styles.container}>
          <SelectableCategoriesTable
            categories={categories}
            onSelect={this.handleSelect}
            selection={selection}
          />
        </ScrollView>
      </TopScreenView>
    );
  }
}
