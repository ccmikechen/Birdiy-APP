import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import PostEditor from '../../components/PostEditor';

import EditPostMutation from '../../mutations/EditPostMutation';

import {
  showEditPostSuccessAlert,
  showEditPostFailedAlert,
} from '../../helpers/alert';

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
    screenProps: PropTypes.shape({
      spinner: PropTypes.shape({
        on: PropTypes.func.isRequired,
        off: PropTypes.func.isRequired,
      }).isRequired,
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
    const { navigation, screenProps: { spinner } } = this.props;
    const { post } = this.state;

    const mutation = new EditPostMutation(post).setHook(spinner);

    mutation.commit()
      .then((res) => {
        if (res.errors) {
          this.handleSavingError();

          return;
        }
        navigation.goBack();
        showEditPostSuccessAlert();
      })
      .catch(this.handleSavingError);
  };

  handleSavingError = () => {
    showEditPostFailedAlert();
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
