import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';
import i18n from 'i18n-js';

import TabsScreenView from '../../components/TabsScreenView';
import SearchHeader from '../../components/SearchHeader';
import AnimatedAddButton from '../../components/AnimatedAddButton';
import NewestProjectList from '../../containers/NewestProjectList';
import HotestProjectList from '../../containers/HotestProjectList';
import LoginActions from '../../components/LoginActions';

import { isLoggedIn } from '../../helpers/credentails';

import styles from './styles';

export default class ProjectsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      push: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      newest: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object),
      }),
      hotest: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object),
      }),
    }),
    variables: PropTypes.shape({
      count: PropTypes.number,
    }).isRequired,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  state = {
    addProjectButtonVisible: true,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('refocus', this.handleRefocus);
  }

  handleRefocus = () => {
    const { navigation } = this.props;
    const tabIndex = this.screenView.getTabIndex();

    if (!(this.newestList && this.hotestList)) {
      return;
    }

    if (tabIndex === 0) {
      if (this.newestList.isOnTop()) {
        navigation.setParams({ keyword: '', categories: [] });
      } else {
        this.newestList.scrollToTopOrRefresh();
      }
    } else if (tabIndex === 1) {
      if (this.hotestList.isOnTop()) {
        navigation.setParams({ keyword: '', categories: [] });
      } else {
        this.hotestList.scrollToTopOrRefresh();
      }
    }
  };

  handleOpenProject = (project) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id: project.id });
  };

  handleSearch = () => {
    const { navigation } = this.props;
    const keyword = navigation.getParam('keyword');
    const categories = navigation.getParam('categories');

    navigation.navigate('SearchDetail', { keyword, categories });
  };

  handleSelectTopic = (topics, category) => {
    const { navigation } = this.props;

    navigation.setParams({
      topics,
      categories: category ? [category] : [],
    });
  };

  handleOpenFilter = () => {
    const { navigation } = this.props;
    const selected = navigation.getParam('topics');

    navigation.navigate('SelectTopicModal', {
      selected,
      multiple: true,
      onSelect: this.handleSelectTopic,
    });
  };

  handleAddProject = async () => {
    if (!(await isLoggedIn())) {
      this.loginActions.show(i18n.t('loginActions.creatingProjectMessage'));
      return;
    }

    const { navigation } = this.props;
    navigation.navigate('CreateProjectModal');
  };

  handleLoginPress = () => {
    const { navigation } = this.props;
    navigation.navigate('LoginModal');
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;
    const { addProjectButtonVisible } = this.state;
    const keyword = navigation.getParam('keyword');
    const topics = navigation.getParam('topics');
    const categories = navigation.getParam('categories');
    const tabs = [
      i18n.t('projects.tabs.newest'),
      i18n.t('projects.tabs.hotest'),
    ];

    return (
      <View style={styles.container}>
        <TabsScreenView
          ref={(ref) => { this.screenView = ref; }}
          navigation={navigation}
          renderHeader={() => (
            <SearchHeader
              keyword={keyword}
              topics={topics || []}
              categories={categories || []}
              onSearch={this.handleSearch}
              onOpenFilter={this.handleOpenFilter}
            />
          )}
          tabs={tabs}
          onToggleTabBar={(visible) => {
            this.setState({ addProjectButtonVisible: visible });
          }}
          animatedScroll
          loading={loading}
        >
          <NewestProjectList
            innerRef={(ref) => { this.newestList = ref; }}
            query={query}
            batchLoad={variables.count}
            keyword={keyword}
            topics={topics}
            headerPadding
            onProjectPress={this.handleOpenProject}
            showCountings
          />
          <HotestProjectList
            innerRef={(ref) => { this.hotestList = ref; }}
            query={query}
            batchLoad={variables.count}
            keyword={keyword}
            topics={topics}
            headerPadding
            onProjectPress={this.handleOpenProject}
            showCountings
          />
        </TabsScreenView>
        <AnimatedAddButton
          style={styles.addProjectButton}
          visible={addProjectButtonVisible}
          translate={80}
          renderIcon={() => (
            <Icon.MaterialIcons
              name="add"
              size={26}
              color="#ffffff"
            />
          )}
          onPress={this.handleAddProject}
        />
        <LoginActions
          ref={(ref) => { this.loginActions = ref; }}
          onLogin={this.handleLoginPress}
        />
      </View>
    );
  }
}
