/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import SimpleScreenView from '../../components/SimpleScreenView';
import UserProjectsHeader from '../../components/UserProjectsHeader';
import MyProjectList from '../../containers/MyProjectList';

import DeleteProjectMutation from '../../mutations/DeleteProjectMutation';

import styles from './styles';

export default class MyProjectsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.object,
    variables: PropTypes.shape({
      count: PropTypes.number,
    }).isRequired,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  handleProjectPress = (id, published) => (
    published ? this.handleOpenProject(id) : this.handleEditProject(id)
  );

  handleOpenProject = (id) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id });
  };

  handleEditProject = (id) => {
    const { navigation } = this.props;
    navigation.navigate('EditProjectModal', { id });
  };

  handleDeleteProject = (id) => {
    Alert.alert(
      '刪除專案',
      '專案一旦刪除則無法手動復原，確定要刪除專案嗎？',
      [
        { text: '取消' },
        { text: '確定', onPress: () => this.deleteProject(id) },
      ],
    );
  };

  deleteProject = (id) => {
    const mutation = new DeleteProjectMutation({ id });

    mutation.commit()
      .then(() => {
        Alert.alert(
          '專案刪除成功',
          '專案已成功刪除，若要復原請聯繫客服人員。',
        );
      })
      .catch(() => {
        Alert.alert('專案刪除失敗');
      });
  };

  handleSearch = () => {
  };

  handleOpenFilter = () => {
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;

    return (
      <SimpleScreenView
        style={styles.container}
        navigation={navigation}
        renderHeader={() => (
          <UserProjectsHeader
            onBack={() => navigation.goBack()}
            onSearch={this.handleSearch}
            onOpenFilter={this.handleOpenFilter}
          />
        )}
        animatedScroll
        loading={loading}
      >
        <MyProjectList
          query={query}
          batchLoad={variables.count}
          headerPadding
          onProjectPress={this.handleProjectPress}
          onEditProject={this.handleEditProject}
          onDeleteProject={this.handleDeleteProject}
          showStatus
        />
      </SimpleScreenView>
    );
  }
}
