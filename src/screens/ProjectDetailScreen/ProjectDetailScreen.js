import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Linking,
} from 'react-native';
import { WebBrowser } from 'expo';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import LikeButton from '../../components/LikeButton';
import ProjectDetailSection from '../../components/ProjectDetailSection';
import ProjectAuthor from '../../containers/ProjectAuthor';
import ProjectOptionButtons from '../../components/ProjectOptionButtons';
import ProjectDetailMaterialList from '../../containers/ProjectDetailMaterialList';
import ProjectDetailFileList from '../../containers/ProjectDetailFileList';
import ProjectDetailMethodList from '../../containers/ProjectDetailMethodList';
import ProjectDetailFollowPostList from '../../containers/ProjectDetailFollowPostList';

import styles from './styles';

export default class ProjectDetailScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      project: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        author: PropTypes.object,
        category: PropTypes.shape({
          name: PropTypes.string,
        }),
        introduction: PropTypes.string,
        viewCount: PropTypes.number,
        favoriteCount: PropTypes.number,
        likeCount: PropTypes.number,
        relatedPostCount: PropTypes.number,
        materials: PropTypes.object,
        fileResources: PropTypes.object,
        methods: PropTypes.object,
        tip: PropTypes.string,
        relatedPosts: PropTypes.object,
      }),
    }),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    query: null,
    loading: true,
  };

  defaultProject = {
    name: '',
    image: '',
    category: {
      name: '',
    },
    introduction: '',
    viewCount: 0,
    favoriteCount: 0,
    likeCount: 0,
    relatedPostCount: 0,
    tip: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  handleLikePress = () => {
    const { liked } = this.state;
    this.setState({ liked: !liked });
  };

  handleMaterialLinkPress = (link) => {
    WebBrowser.openBrowserAsync(link);
  };

  handleMaterialAddPress = () => {
  };

  handleFileLinkPress = (link) => {
    Linking.openURL(link);
  };

  handleOpenPost = (id) => {
    const { navigation } = this.props;
    navigation.navigate('PostDetail', { id });
  };

  render() {
    const { navigation, query, loading } = this.props;
    const { liked } = this.state;
    const project = query ? query.project : this.defaultProject;
    const projectId = navigation.getParam('id');

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            title={project.name}
            onBack={() => navigation.goBack()}
          />
        )}
        animatedScroll
        loading={loading}
      >
        <View style={styles.projectImageContainer}>
          <Image
            style={styles.projectImage}
            source={{ uri: project.image }}
          />
        </View>
        <View style={styles.headerSection}>
          <View style={styles.headerInfoContainer}>
            <View style={[styles.contentSection, styles.titleContainer]}>
              <Text style={styles.title}>
                {project.name}
              </Text>
            </View>
            <View style={[styles.contentSection, styles.statisticsContainer]}>
              <Text style={styles.statistics}>
                {`${project.viewCount} 看過．${project.likeCount} 喜歡．${project.favoriteCount} 收藏．${project.relatedPostCount} 跟著做`}
              </Text>
            </View>
          </View>
          <View style={styles.likeButtonContainer}>
            <LikeButton liked={liked} onPress={this.handleLikePress} />
          </View>
        </View>
        <View style={styles.authorContainer}>
          <ProjectAuthor project={project} />
        </View>
        <View style={styles.optionsContainer}>
          <ProjectOptionButtons />
        </View>
        <ProjectDetailSection title="介紹">
          <View style={styles.introContainer}>
            <Text style={styles.intro}>
              {project.introduction}
            </Text>
          </View>
        </ProjectDetailSection>
        <ProjectDetailMaterialList
          project={project}
          onLinkPress={this.handleMaterialLinkPress}
          onAddPress={this.handleMaterialAddPress}
        />
        <ProjectDetailFileList
          project={project}
          onLinkPress={this.handleFileLinkPress}
        />
        <ProjectDetailMethodList project={project} />
        {project.tip ? (
          <ProjectDetailSection title="小技巧">
            <View style={styles.tipContainer}>
              <Text style={styles.tip}>
                {project.tip}
              </Text>
            </View>
          </ProjectDetailSection>
        ) : null}
        <ProjectDetailFollowPostList
          projectId={projectId}
          project={project}
          onPress={this.handleOpenPost}
        />
      </TopScreenView>
    );
  }
}
