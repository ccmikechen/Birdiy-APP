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
import ProjectAuthor from '../../components/ProjectAuthor';
import ProjectOptionButtons from '../../components/ProjectOptionButtons';
import MaterialList from '../../components/MaterialList';
import FileList from '../../components/FileList';
import MethodList from '../../components/MethodList';
import FollowPostView from '../../components/FollowPostView';

import styles from './styles';

import { project as mockProject } from './mocks';

export default class ProjectDetailScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
      category: PropTypes.string.isRequired,
      introduction: PropTypes.string.isRequired,
      viewed: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      favorites: PropTypes.number.isRequired,
      posts: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired,
      materials: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        link: PropTypes.string,
      })).isRequired,
      files: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string,
      })),
      methods: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string.isRequired,
        image: PropTypes.string,
      })),
      tip: PropTypes.string,
      followPosts: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        author: PropTypes.shape({
          image: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      })).isRequired,
    }),
  };

  static defaultProps = {
    project: mockProject,
  };

  constructor(props) {
    super(props);
    this.state = {
      liked: props.project.liked,
      followPosts: props.project.followPosts,
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

  loadMoreFollowPost = async () => {
    const { project } = this.props;
    const { followPosts } = this.state;
    const newFollowPosts = [...followPosts, ...project.followPosts];
    this.setState({ followPosts: newFollowPosts });
  };

  handleFollowPostPress = () => {
    const { navigation } = this.props;
    navigation.navigate('PostDetail');
  };

  render() {
    const { navigation, project } = this.props;
    const { liked, followPosts } = this.state;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            title={project.title}
            onBack={() => navigation.goBack()}
          />
        )}
        animatedScroll
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
                {project.title}
              </Text>
            </View>
            <View style={[styles.contentSection, styles.statisticsContainer]}>
              <Text style={styles.statistics}>
                {`${project.viewed} 看過．${project.likes} 喜歡．${project.favorites} 收藏．${project.posts} 跟著做`}
              </Text>
            </View>
          </View>
          <View style={styles.likeButtonContainer}>
            <LikeButton liked={liked} onPress={this.handleLikePress} />
          </View>
        </View>
        <View style={styles.authorContainer}>
          <ProjectAuthor author={project.author} />
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
        <ProjectDetailSection title="材料">
          <MaterialList
            materials={project.materials}
            onLinkPress={this.handleMaterialLinkPress}
            onAddPress={this.handleMaterialAddPress}
          />
        </ProjectDetailSection>
        <ProjectDetailSection title="檔案資料">
          <FileList
            files={project.files}
            onLinkPress={this.handleFileLinkPress}
          />
        </ProjectDetailSection>
        <ProjectDetailSection title="作法">
          <MethodList methods={project.methods} />
        </ProjectDetailSection>
        <ProjectDetailSection title="小技巧">
          <View style={styles.tipContainer}>
            <Text style={styles.tip}>
              {project.tip}
            </Text>
          </View>
        </ProjectDetailSection>
        <ProjectDetailSection title="跟著做">
          <FollowPostView
            posts={followPosts}
            loadMore={this.loadMoreFollowPost}
            hasMore
            onPress={this.handleFollowPostPress}
          />
        </ProjectDetailSection>
      </TopScreenView>
    );
  }
}
