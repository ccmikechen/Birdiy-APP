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
      openDrawer: PropTypes.func.isRequired,
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
    this.newestList.scrollToTopOrRefresh();
    this.hotestList.scrollToTopOrRefresh();
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

  handleSelectCategory = (selection) => {
    const { navigation, query } = this.props;
    const categories = query.categories.edges.map(({ node }, index) => (
      selection[index] ? node.name : null
    )).filter(Boolean);

    navigation.setParams({ categories });
  };

  handleOpenFilter = () => {
    const { navigation, query } = this.props;
    const categories = query.categories.edges.map(({ node }) => node);
    const selected = navigation.getParam('categories');

    navigation.navigate('SelectCategoryModal', {
      categories,
      selected,
      multipleSelect: true,
      onSelect: this.handleSelectCategory,
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
    const categories = navigation.getParam('categories');
    const tabs = [{
      key: 'newest', title: i18n.t('projects.tabs.newest'),
    }, {
      key: 'hotest', title: i18n.t('projects.tabs.hotest'),
    }];

    return (
      <View style={styles.container}>
        <TabsScreenView
          ref={(ref) => { this.screenView = ref; }}
          navigation={navigation}
          renderHeader={() => (
            <SearchHeader
              onOpenDrawer={() => navigation.openDrawer()}
              keyword={keyword}
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
            categories={categories}
            headerPadding
            onProjectPress={this.handleOpenProject}
          />
          <HotestProjectList
            innerRef={(ref) => { this.hotestList = ref; }}
            query={query}
            batchLoad={variables.count}
            keyword={keyword}
            categories={categories}
            headerPadding
            onProjectPress={this.handleOpenProject}
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
