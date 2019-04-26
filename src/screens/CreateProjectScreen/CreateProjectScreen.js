import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import EditSection from '../../components/EditSection';
import PureTextInput from '../../components/PureTextInput';
import PureSelector from '../../components/PureSelector';

import CreateProjectMutation from '../../mutations/CreateProjectMutation';

import styles from './styles';

export default class CreateProjectScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      categories: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            image: PropTypes.string,
          }),
        })),
      }),
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  state = {
    projectName: '',
    categoryIndex: null,
  };

  handleSelectCategory = (index) => {
    this.setState({ categoryIndex: index });
  };

  handleSelecteCategoryPress = () => {
    const { navigation } = this.props;
    navigation.navigate('SelectCategoryModal', {
      categories: this.getCategories(),
      onSelect: this.handleSelectCategory,
    });
  };

  handleSave = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const { projectName } = this.state;
    const category = this.getCategory();
    const mutation = new CreateProjectMutation({
      name: projectName,
      category,
    });

    mutation.commit()
      .then(({ response }) => {
        const { id } = response.project;

        navigation.goBack();
        navigation.navigate('EditProjectModal', { id });
      })
      .catch(() => {
        // TODO: Error handling
      });
  };

  getCategories = () => {
    const { query } = this.props;

    return query && query.categories.edges.map(({ node }) => node);
  };

  getCategory = () => {
    const { categoryIndex } = this.state;
    const categories = this.getCategories();
    return (categories
            && categories[categoryIndex]
            && categories[categoryIndex].name) || null;
  };

  render() {
    const { navigation, loading } = this.props;
    const { projectName } = this.state;
    const category = this.getCategory();

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="建立專案"
            rightButton={{
              icon: 'save',
              color: '#666666',
              onPress: this.handleSave,
            }}
          />
        )}
        fullScreen
        loading={loading}
      >
        <ScrollView style={styles.container}>
          <EditSection title="專案名稱">
            <PureTextInput
              style={styles.textInput}
              value={projectName}
              placeholder="輸入你的專案名稱"
              onChangeText={value => this.setState({ projectName: value })}
              maxLength={20}
              counter
            />
          </EditSection>
          <EditSection title="分類">
            <PureSelector
              placeholder="選擇你的專案分類"
              value={category}
              onPress={this.handleSelecteCategoryPress}
            />
          </EditSection>
          <View style={styles.submitButtonContainer}>
            <Button
              style={styles.submitButton}
              mode="contained"
              onPress={this.handleSubmit}
            >
              <Text style={styles.submitButtonText}>儲存並繼續編輯</Text>
            </Button>
          </View>
        </ScrollView>
      </TopScreenView>
    );
  }
}
