import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';

import InputScreenView from '../../components/InputScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ProjectDraftEditor from '../../components/ProjectDraftEditor';

import CreateProjectMutation from '../../mutations/CreateProjectMutation';

import {
  showSaveProjectFailedAlert,
} from '../../helpers/alert';

const i18nOptions = { scope: 'project.create' };

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
    screenProps: PropTypes.shape({
      spinner: PropTypes.shape({
        on: PropTypes.func.isRequired,
        off: PropTypes.func.isRequired,
      }).isRequired,
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

  initialProject = {
    name: '',
    category: null,
  };

  handleOpenCategorySelector = (categories, callback) => {
    const { navigation } = this.props;
    navigation.navigate('SelectCategoryModal', {
      categories,
      onSelect: callback,
    });
  };

  handleSubmitPress = () => {
    this.projectDraftEditor.submit();
  };

  handleSubmit = (values) => {
    const { navigation, screenProps: { spinner } } = this.props;
    const mutation = new CreateProjectMutation(values).setHook(spinner);

    mutation.commit()
      .then((response) => {
        const { id } = response.createProject.project;

        navigation.goBack();
        navigation.navigate('EditProjectModal', { id });
      })
      .catch(this.handleSubmitError);
  };

  handleSubmitError = () => {
    showSaveProjectFailedAlert();
  };

  render() {
    const { navigation, loading, query } = this.props;
    const categories = query && query.categories.edges.map(({ node }) => node);

    return (
      <InputScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title={i18n.t('title', i18nOptions)}
            rightButton={{
              icon: 'save',
              color: '#666666',
              onPress: this.handleSubmitPress,
            }}
          />
        )}
        fullScreen
        loading={loading}
      >
        <ProjectDraftEditor
          ref={(ref) => { this.projectDraftEditor = ref; }}
          initialValue={this.initialProject}
          categories={categories}
          onOpenCategorySelector={this.handleOpenCategorySelector}
          onSubmit={this.handleSubmit}
          onSubmitPress={this.handleSubmitPress}
        />
      </InputScreenView>
    );
  }
}
