import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import ProjectDraftEditor from '../../components/ProjectDraftEditor';

import CreateProjectMutation from '../../mutations/CreateProjectMutation';

import {
  showSaveProjectSuccessAlert,
  showSaveProjectFailedAlert,
} from '../../helpers/alert';

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

  state = {
    project: {
      name: '',
      category: null,
    },
  };

  handleChange = (data) => {
    const { project } = this.state;
    this.setState({ project: { ...project, ...data } });
  };

  handleSelectCategory = (index) => {
    const { project } = this.state;
    this.setState({
      project: {
        ...project,
        category: this.getCategory(index),
      },
    });
  };

  handleOpenCategorySelector = () => {
    const { navigation } = this.props;
    navigation.navigate('SelectCategoryModal', {
      categories: this.getCategories(),
      onSelect: this.handleSelectCategory,
    });
  };

  handleSave = () => {
    const { navigation } = this.props;
    const { project } = this.state;
    const mutation = new CreateProjectMutation(project);

    mutation.commit()
      .then(() => {
        navigation.goBack();
        navigation.navigate('Profile');
        showSaveProjectSuccessAlert();
      })
      .catch(this.handleSaveError);
  };

  handleSubmit = () => {
    const { navigation, screenProps: { spinner } } = this.props;
    const { project } = this.state;
    const mutation = new CreateProjectMutation(project).setHook(spinner);

    mutation.commit()
      .then((response) => {
        const { id } = response.createProject.project;

        navigation.goBack();
        navigation.navigate('EditProjectModal', { id });
      })
      .catch(this.handleSaveError);
  };

  handleSaveError = () => {
    showSaveProjectFailedAlert();
  };

  getCategories = () => {
    const { query } = this.props;

    return query && query.categories.edges.map(({ node }) => node);
  };

  getCategory = (index) => {
    const categories = this.getCategories();
    return (categories
            && categories[index]
            && categories[index].name) || null;
  };

  render() {
    const { navigation, loading } = this.props;
    const { project } = this.state;

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
        <ProjectDraftEditor
          project={project}
          onChange={this.handleChange}
          onOpenCategorySelector={this.handleOpenCategorySelector}
          onSubmit={this.handleSubmit}
        />
      </TopScreenView>
    );
  }
}
