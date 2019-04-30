import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { cloneDeep } from 'lodash';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import PostEditor from '../../components/PostEditor';

import EditPostMutation from '../../mutations/EditPostMutation';

export default class EditPostScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
    query: PropTypes.shape({
      post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        relatedProjectType: PropTypes.string.isRequired,
        relatedProjectName: PropTypes.string,
        relatedProject: PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
        photos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
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
    initialized: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { query } = nextProps;
    const { initialized } = prevState;

    if (!query || initialized) {
      return null;
    }

    const { post } = query;

    return {
      initialized: true,
      post: {
        id: post.id,
        relatedProject: post.relatedProjectType === 'project' ? {
          type: 'project',
          name: post.relatedProject.name,
          id: post.relatedProject.id,
        } : {
          type: 'custom',
          name: post.relatedProjectName,
          id: null,
        },
        message: post.message,
        photos: cloneDeep(post.photos),
      },
    };
  }

  handleChange = (data) => {
    const { post } = this.state;
    this.setState({ post: { ...post, ...data } });
  };

  handleSave = () => {
    const { navigation } = this.props;
    const { post } = this.state;

    const mutation = new EditPostMutation(post);

    mutation.commit()
      .then(() => {
        navigation.goBack();
        Alert.alert('投稿編輯成功');
      })
      .catch(() => {
        Alert.alert('投稿編輯失敗');
      });
  };

  render() {
    const { navigation, loading } = this.props;
    const { post } = this.state;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="編輯投稿"
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
        <PostEditor
          post={post}
          onChange={this.handleChange}
        />
      </TopScreenView>
    );
  }
}