import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import HomeHeader from '../../components/HomeHeader';
import HomeSection from '../../components/HomeSection';
import ExtensibleSectionContent from '../../components/ExtensibleSectionContent';
import CategoriesTable from '../../containers/CategoriesTable';
import ProjectThumbnailsTable from '../../containers/ProjectThumbnailsTable';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      all: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object),
      }),
      following: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object),
      }),
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  state = {
    keyword: '',
  };

  handleOpenProject = (id) => {
    const { navigation } = this.props;
    navigation.push('ProjectDetail', { id });
  };

  handleMoreProject = () => {
    const { navigation } = this.props;
    navigation.navigate('Projects');
  };

  renderHotCategories = () => {
    const { query } = this.props;

    return (
      <ExtensibleSectionContent
        onMorePress={() => {}}
        renderContent={() => (
          <CategoriesTable query={query} />
        )}
      />
    );
  };

  renderNewProjects = () => {
    const { query } = this.props;

    return (
      <ExtensibleSectionContent
        onMorePress={this.handleMoreProject}
        renderContent={() => (
          <ProjectThumbnailsTable
            query={query}
            onPressProject={this.handleOpenProject}
          />
        )}
      />
    );
  };

  handleSearch = () => {
    const { navigation } = this.props;
    const { keyword } = this.state;
    navigation.navigate('Projects', { keyword });
  }

  handleOpenCart = () => {
    const { navigation } = this.props;
    navigation.push('Cart');
  }

  render() {
    const { navigation, loading } = this.props;
    const { keyword } = this.state;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <HomeHeader
            keyword={keyword}
            onKeywordChange={value => this.setState({ keyword: value })}
            onOpenDrawer={() => navigation.openDrawer()}
            onSearch={this.handleSearch}
            onOpenCart={this.handleOpenCart}
          />
        )}
        animatedScroll
        loading={loading}
      >
        <HomeSection
          title="熱門分類"
          renderContent={this.renderHotCategories}
        />
        <HomeSection
          title="最新專案"
          renderContent={this.renderNewProjects}
        />
      </TopScreenView>
    );
  }
}
