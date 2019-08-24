import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { AdMobBanner } from 'expo-ads-admob';
import * as Icon from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import parseURL from 'url-parse';
import videoUrl from 'js-video-url-parser';
import i18n from 'i18n-js';

import SimpleScreenView from '../../components/SimpleScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import LikeButton from '../../components/LikeButton';
import VideoPlayer from '../../components/VideoPlayer';
import ProjectDetailSection from '../../components/ProjectDetailSection';
import ProjectAuthor from '../../containers/ProjectAuthor';
import ProjectOptionButtons from '../../components/ProjectOptionButtons';
import ProjectDetailMaterialList from '../../containers/ProjectDetailMaterialList';
import ProjectDetailFileList from '../../containers/ProjectDetailFileList';
import ProjectDetailMethodList from '../../containers/ProjectDetailMethodList';
import ProjectDetailFollowPostList from '../../containers/ProjectDetailFollowPostList';
import ProjectDetailCommentList from '../../containers/ProjectDetailCommentList';
import ProjectCommentActions from '../../components/ProjectCommentActions';
import LoginActions from '../../components/LoginActions';
import MessageView from '../../components/MessageView';

import ViewProjectMutation from '../../mutations/ViewProjectMutation';
import LikeProjectMutation from '../../mutations/LikeProjectMutation';
import CancelLikeProjectMutation from '../../mutations/CancelLikeProjectMutation';
import FavoriteProjectMutation from '../../mutations/FavoriteProjectMutation';
import CancelFavoriteProjectMutation from '../../mutations/CancelFavoriteProjectMutation';
import FollowUserMutation from '../../mutations/FollowUserMutation';
import CancelFollowUserMutation from '../../mutations/CancelFollowUserMutation';
import ReportProjectMutation from '../../mutations/ReportProjectMutation';
import CreateProjectCommentMutation from '../../mutations/CreateProjectCommentMutation';
import ReportProjectCommentMutation from '../../mutations/ReportProjectCommentMutation';

import { isLoggedIn } from '../../helpers/credentails';
import Cart from '../../helpers/cart';
import { isAdsVisible } from '../../helpers/ads';
import {
  showConfirmReportingProjectAlert,
  showConfirmReportingCommentAlert,
} from '../../helpers/alert';
import { showReportSuccessMessage } from '../../helpers/toast';

import { UnauthorizedError } from '../../errors';

import { TextColor } from '../../constants/Colors';

import config from '../../configs';

import styles from './styles';

const i18nOptions = { scope: 'project' };

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
      viewer: PropTypes.shape({
        user: PropTypes.shape({
          image: PropTypes.string,
        }),
      }),
      project: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        topic: PropTypes.shape({
          name: PropTypes.string,
        }),
        author: PropTypes.object,
        category: PropTypes.shape({
          name: PropTypes.string,
        }),
        introduction: PropTypes.string,
        source: PropTypes.string,
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
  };

  static defaultProps = {
    query: null,
  };

  defaultProject = {
    id: '',
    name: '',
    image: '',
    video: null,
    topic: {
      name: '',
    },
    introduction: '',
    source: null,
    viewCount: 0,
    favoriteCount: 0,
    likeCount: 0,
    relatedPostCount: 0,
    viewed: false,
    liked: false,
    favorite: false,
    tip: '',
    publishedAt: null,
    deletedAt: null,
  };

  state = {
    viewed: false,
    cartMaterials: new Map(),
  };

  cart = new Cart();

  static getDerivedStateFromProps(nextProps, prevState) {
    const { query } = nextProps;
    const { viewed } = prevState;

    const isExist = query && query.project;
    const isViewed = (isExist && query.project.viewed) || viewed;
    if (!isExist || isViewed) {
      return null;
    }

    isLoggedIn().then((loggedIn) => {
      if (!loggedIn) {
        return;
      }

      const mutation = new ViewProjectMutation({ id: query.project.id });
      mutation.commit().catch(() => {});
    });

    return { ...prevState, viewed: true };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const projectId = navigation.getParam('id');

    await this.cart.reload();

    const cartProject = await this.cart.getProject(projectId);
    const cartMaterials = cartProject
      ? new Map(cartProject.materials.map(material => (
        [material.id, true]
      )))
      : new Map();

    this.setState({ cartMaterials });
  }

  handleOpenVideo = () => {
    const { query: { project: { video } } } = this.props;
    Linking.openURL(video);
  };

  handleUserPress = (id) => {
    const { navigation } = this.props;
    navigation.push('User', { id });
  };

  handleFollowUser = (id) => {
    const mutation = new FollowUserMutation({ id });
    mutation.commit().catch((e) => {
      if (e instanceof UnauthorizedError) {
        this.loginActions.show(i18n.t('loginActions.followingMessage'));
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
        this.loginActions.show(i18n.t('loginActions.likeProjectMessage'));
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
        this.loginActions.show(i18n.t('loginActions.favoriteProjectMessage'));
      }
    });
  };

  handleSharePress = () => {
    const { query: { project } } = this.props;
    const url = `${config.BIRDIY_SERVER_HOST}/project/${project.id}`;

    Share.share({
      title: project.name,
      message: url,
      url,
    }, {
      dialogTitle: i18n.t('general.shareTo'),
    });
  };

  handleNewPostPress = async () => {
    if (!(await isLoggedIn())) {
      this.loginActions.show(i18n.t('loginActions.creatingFollowingPostMessage'));
      return;
    }

    const { query: { project }, navigation } = this.props;
    const relatedProject = {
      type: 'project',
      name: project.name,
      image: project.image,
      id: project.id,
    };

    navigation.navigate('CreatePostModal', { relatedProject });
  };

  handleMaterialLinkPress = (link) => {
    WebBrowser.openBrowserAsync(link);
  };

  handleMaterialCartToggle = async (material, status) => {
    const { query: { project } } = this.props;
    const { cartMaterials } = this.state;

    if (status) {
      await this.cart.addMaterial(project, material);
    } else {
      await this.cart.deleteMaterial(project.id, material.id);
    }

    cartMaterials.set(material.id, status);
    this.setState({ cartMaterials });
  };

  handleFileLinkPress = (link) => {
    Linking.openURL(link);
  };

  handleOpenPost = (userId, postId) => {
    const { navigation } = this.props;
    navigation.push('UserPosts', { userId, postId });
  };

  handleComment = (comment, parent) => {
    const { query: { project } } = this.props;
    const mutation = new CreateProjectCommentMutation({
      projectId: project.id,
      parentId: parent ? parent.id : null,
      message: comment,
    });
    mutation.commit().catch(() => {});
  };

  handleCommentActionPress = (comment) => {
    this.projectCommentActions.show(comment);
  };

  handleReportComment = (commentId) => {
    showConfirmReportingCommentAlert().then(() => {
      const mutation = new ReportProjectCommentMutation({ id: commentId });
      mutation.commit()
        .then(() => {
          showReportSuccessMessage();
        })
        .catch(() => {});
    });
  };

  handleLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('LoginModal');
  };

  handleReportProject = () => {
    const { query: { project: { id } } } = this.props;

    showConfirmReportingProjectAlert().then(() => {
      const mutation = new ReportProjectMutation({ id });
      mutation.commit()
        .then(() => {
          showReportSuccessMessage();
        })
        .catch(() => {});
    });
  };

  render() {
    const { navigation, query } = this.props;
    const { cartMaterials } = this.state;
    const user = query && query.viewer && query.viewer.user;
    const project = query ? query.project : this.defaultProject;
    const isExist = project && !project.deletedAt && project.publishedAt;
    const video = isExist && project.video && videoUrl.parse(project.video);
    const showVideo = video && ['youtube', 'vimeo'].includes(video.provider);

    return (
      <SimpleScreenView
        {...this.props}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            style={styles.header}
          />
        )}
        headerPadding={false}
        adType="facebook"
      >
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          enableOnAndroid
        >
          <View style={styles.statusBarPaddingView} />
          {
            isExist ? (
              <View style={styles.container}>
                <View style={styles.projectImageContainer}>
                  {
                    showVideo ? (
                      <View style={styles.videoContainer}>
                        <VideoPlayer
                          style={styles.projectVideo}
                          video={video}
                        />
                        <TouchableOpacity
                          style={styles.videoButton}
                          onPress={this.handleOpenVideo}
                        >
                          <Text style={styles.videoButtonText}>
                            {i18n.t('general.watchVideo')}
                          </Text>
                          <Icon.MaterialIcons
                            name="navigate-next"
                            size={14}
                            color={TextColor.primaryLight}
                          />
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <Image
                        style={styles.projectImage}
                        source={{ uri: project.image }}
                      />
                    )
                  }
                </View>
                <View style={styles.headerSection}>
                  <View style={styles.headerInfoContainer}>
                    <View style={[styles.contentSection, styles.topicContainer]}>
                      <Text style={styles.topic}>
                        {i18n.t(`topics.${project.topic.name}`, { defaultValue: project.topic.name })}
                      </Text>
                    </View>
                    <View style={[styles.contentSection, styles.titleContainer]}>
                      <Text style={styles.title}>
                        {project.name}
                      </Text>
                    </View>
                    <View style={[styles.contentSection, styles.statisticsContainer]}>
                      <Text style={styles.statistics}>
                        {`${project.viewCount} ${i18n.t('statistics.viewed', i18nOptions)}．${project.likeCount} ${i18n.t('statistics.liked', i18nOptions)}．${project.favoriteCount} ${i18n.t('statistics.favorited', i18nOptions)}．${project.relatedPostCount} ${i18n.t('statistics.followed', i18nOptions)}`}
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
                  />
                </View>
                <View style={styles.optionsContainer}>
                  <ProjectOptionButtons
                    favorite={project.favorite}
                    onFavoritePress={this.handleFavoritePress}
                    onSharePress={this.handleSharePress}
                    onNewPostPress={this.handleNewPostPress}
                  />
                </View>
                <ProjectDetailSection title={i18n.t('sections.introduction', i18nOptions)}>
                  <View style={styles.introContainer}>
                    <Text style={styles.intro}>
                      {project.introduction}
                    </Text>
                  </View>
                  {project.source && (
                    <View style={styles.sourceContainer}>
                      <Text style={styles.sourceTitle}>
                        {i18n.t('sections.source', i18nOptions)}
                      </Text>
                      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(project.source)}>
                        <Text style={styles.source}>
                          {parseURL(project.source, true).host}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </ProjectDetailSection>
                {isAdsVisible() && (
                  <View style={styles.adContainer}>
                    <AdMobBanner
                      bannerSize="mediumRectangle"
                      adUnitID="ca-app-pub-9037534471740373/7681169073"
                    />
                  </View>
                )}
                <ProjectDetailMaterialList
                  project={project}
                  cart={cartMaterials}
                  onLinkPress={this.handleMaterialLinkPress}
                  onCartToggle={this.handleMaterialCartToggle}
                />
                <ProjectDetailFileList
                  project={project}
                  onLinkPress={this.handleFileLinkPress}
                />
                <ProjectDetailMethodList project={project} />
                {project.tip ? (
                  <ProjectDetailSection title={i18n.t('sections.tip', i18nOptions)}>
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
                <ProjectDetailCommentList
                  user={user}
                  projectId={project.id}
                  project={project}
                  onActionButtonPress={this.handleCommentActionPress}
                  onComment={this.handleComment}
                  onRequestLogin={this.handleLogin}
                />
                <TouchableOpacity
                  style={styles.reportButton}
                  onPress={this.handleReportProject}
                >
                  <Icon.FontAwesome
                    name="flag"
                    size={14}
                    color={TextColor.subDark}
                  />
                  <Text style={styles.reportText}>
                    {i18n.t('report', i18nOptions)}
                  </Text>
                </TouchableOpacity>
                <ProjectCommentActions
                  ref={(ref) => { this.projectCommentActions = ref; }}
                  onReport={this.handleReportComment}
                />
                <LoginActions
                  ref={(ref) => { this.loginActions = ref; }}
                  onLogin={this.handleLogin}
                />
              </View>
            ) : (
              <MessageView
                message={i18n.t('project.deletedMessage')}
                style={styles.emptyView}
              />
            )
          }
        </KeyboardAwareScrollView>
      </SimpleScreenView>
    );
  }
}
