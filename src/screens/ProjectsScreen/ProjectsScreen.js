import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'expo';

import TabsScreenView from '../../components/TabsScreenView';
import SearchHeader from '../../components/SearchHeader';
import AnimatedAddButton from '../../components/AnimatedAddButton';
import NewestProjectList from '../../containers/NewestProjectList';
import HotestProjectList from '../../containers/HotestProjectList';

import { isLoggedIn } from '../../helpers/credentails';
import { showLoginAlert } from '../../helpers/alert';

import styles from './styles';

const TABS = [{
  key: 'newest', title: '最新',
}, {
  key: 'hotest', title: '最熱門',
}];

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

  static getDerivedStateFromProps(nextProps, prevState) {
    const keyword = nextProps.navigation.getParam('keyword') || '';

    if (keyword === prevState.lastKeywordParam) {
      return null;
    }

    return {
      ...prevState,
      lastKeywordParam: keyword,
      keyword,
    };
  }

  constructor(props) {
    super(props);

    const keyword = props.navigation.getParam('keyword') || '';
    this.state = {
      addProjectButtonVisible: true,
      lastKeywordParam: keyword,
      keyword,
      categories: [],
    };
  }

  handleOpenProject = (project) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id: project.id });
  };

  handleSearch = () => {
    const { navigation } = this.props;
    const { keyword } = this.state;
    navigation.setParams({ keyword });
    // Refresh
    // scrollToTop
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
      showLoginAlert();
      return;
    }

    const { navigation } = this.props;
    navigation.navigate('CreateProjectModal');
  };

  render() {
    const {
      navigation, query, variables, loading,
    } = this.props;
    const { addProjectButtonVisible, keyword } = this.state;

    return (
      <View style={styles.container}>
        <TabsScreenView
          ref={(ref) => { this.screenView = ref; }}
          style={styles.container}
          navigation={navigation}
          renderHeader={() => (
            <SearchHeader
              onOpenDrawer={() => navigation.openDrawer()}
              keyword={keyword}
              onKeywordChange={value => this.setState({ keyword: value })}
              onSearch={this.handleSearch}
              onOpenFilter={this.handleOpenFilter}
            />
          )}
          tabs={TABS}
          onToggleTabBar={(visible) => {
            this.setState({ addProjectButtonVisible: visible });
          }}
          animatedScroll
          loading={loading}
        >
          <NewestProjectList
            query={query}
            batchLoad={variables.count}
            keyword={navigation.getParam('keyword')}
            categories={navigation.getParam('categories')}
            headerPadding
            onProjectPress={this.handleOpenProject}
          />
          <HotestProjectList
            query={query}
            batchLoad={variables.count}
            keyword={navigation.getParam('keyword')}
            categories={navigation.getParam('categories')}
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
      </View>
    );
  }
}
