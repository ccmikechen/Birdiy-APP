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
import LoginActions from '../../components/LoginActions';

import ViewProjectMutation from '../../mutations/ViewProjectMutation';
import LikeProjectMutation from '../../mutations/LikeProjectMutation';
import CancelLikeProjectMutation from '../../mutations/CancelLikeProjectMutation';
import FavoriteProjectMutation from '../../mutations/FavoriteProjectMutation';
import CancelFavoriteProjectMutation from '../../mutations/CancelFavoriteProjectMutation';
import FollowUserMutation from '../../mutations/FollowUserMutation';
import CancelFollowUserMutation from '../../mutations/CancelFollowUserMutation';

import { isLoggedIn } from '../../helpers/credentails';

import { UnauthorizedError } from '../../errors';

import styles from './styles';

export default class ProjectDetailScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
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
        liked: PropTypes.bool,
        favorite: PropTypes.bool,
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
    id: '',
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
    viewed: false,
    liked: false,
    favorite: false,
    tip: '',
  };

  state = {
    viewed: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { query } = nextProps;
    const { viewed } = prevState;

    if (!query || query.project.viewed || viewed) {
      return null;
    }

    const mutation = new ViewProjectMutation({ id: query.project.id });
    mutation.commit().catch(() => {});

    return { viewed: true };
  }

  handleUserPress = (id) => {
    const { navigation } = this.props;
    navigation.push('User', { id });
  };

  handleFollowUser = (id) => {
    const mutation = new FollowUserMutation({ id });
    mutation.commit().catch((e) => {
      if (e instanceof UnauthorizedError) {
        this.loginActions.show('跟隨用戶之前必須先登入');
      }
    });
  };

  handleUnfollowUser = (id) => {
    const mutation = new CancelFollowUserMutation({ id });
    mutation.commit().catch(() => {});
  };

  handleLikePress = () => {
    const { query: { project: { id, liked } } } = this.props;
    const mutation = liked
      ? new CancelLikeProjectMutation({ id })
      : new LikeProjectMutation({ id });

    mutation.commit().catch((e) => {
      if (e instanceof UnauthorizedError) {
        this.loginActions.show('喜歡專案之前必須先登入');
      }
    });
  };

  handleFavoritePress = () => {
    const { query: { project: { id, favorite } } } = this.props;
    const mutation = favorite
      ? new CancelFavoriteProjectMutation({ id })
      : new FavoriteProjectMutation({ id });

    mutation.commit().catch((e) => {
      if (e instanceof UnauthorizedError) {
        this.loginActions.show('收藏專案之前必須先登入');
      }
    });
  };

  handleNewPostPress = async () => {
    if (!(await isLoggedIn())) {
      this.loginActions.show('發布跟著做投稿之前必須先登入');
      return;
    }

    const { query: { project }, navigation } = this.props;
    const relatedProject = {
      type: 'project',
      name: project.name,
      id: project.id,
    };

    navigation.navigate('CreatePostModal', { relatedProject });
  };

  handleMaterialLinkPress = (link) => {
    WebBrowser.openBrowserAsync(link);
  };

  handleMaterialAddPress = () => {
  };

  handleFileLinkPress = (link) => {
    Linking.openURL(link);
  };

  handleOpenPost = (userId, postId) => {
    const { navigation } = this.props;
    navigation.push('UserPosts', { userId, postId });
  };

  handleLoginPress = () => {
    const { navigation } = this.props;
    navigation.navigate('LoginModal');
  };

  render() {
    const { navigation, query, loading } = this.props;
    const project = query ? query.project : this.defaultProject;

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
            <LikeButton
              liked={project.liked}
              onPress={this.handleLikePress}
            />
          </View>
        </View>
        <View style={styles.authorContainer}>
          <ProjectAuthor
            project={project}
            onUserPress={this.handleUserPress}
            onFollow={this.handleFollowUser}
            onUnfollow={this.handleUnfollowUser}
          />
        </View>
        <View style={styles.optionsContainer}>
          <ProjectOptionButtons
            favorite={project.favorite}
            onFavoritePress={this.handleFavoritePress}
            onNewPostPress={this.handleNewPostPress}
          />
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
          projectId={project.id}
          project={project}
          onPress={this.handleOpenPost}
          onUserPress={this.handleUserPress}
        />
        <LoginActions
          ref={(ref) => { this.loginActions = ref; }}
          onLogin={this.handleLoginPress}
        />
      </TopScreenView>
    );
  }
}
