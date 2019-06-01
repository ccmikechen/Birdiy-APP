import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { cloneDeep } from 'lodash';
import i18n from 'i18n-js';

import InputScreenView from '../../components/InputScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import PostEditor from '../../components/PostEditor';

import EditPostMutation from '../../mutations/EditPostMutation';

import {
  showUnsavedGoBackAlert,
} from '../../helpers/alert';
import {
  showEditPostSuccessMessage,
  showEditPostFailedMessage,
} from '../../helpers/toast';

const i18nOptions = { scope: 'post.edit' };

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
          image: PropTypes.string,
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
      initialPost: {
        id: post.id,
        relatedProject: post.relatedProjectType === 'project' ? {
          type: 'project',
          name: post.relatedProject.name,
          image: post.relatedProject.image,
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

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleGoBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleGoBack);
  }

  handleSubmitPress = () => {
    this.postEditor.submit();
  };

  handleSubmit = (values) => {
    const { navigation, screenProps: { spinner } } = this.props;

    const mutation = new EditPostMutation(values).setHook(spinner);

    mutation.commit()
      .then((res) => {
        if (res.errors) {
          this.handleSubmittingError();

          return;
        }
        navigation.goBack();
        showEditPostSuccessMessage();
      })
      .catch(this.handleSubmittingError);
  };

  handleSubmittingError = () => {
    showEditPostFailedMessage();
  };

  handleGoBack = () => {
    const { navigation } = this.props;
    showUnsavedGoBackAlert().then(() => navigation.goBack());

    return true;
  };

  render() {
    const { navigation, loading } = this.props;
    const { initialPost } = this.state;

    return (
      <InputScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={this.handleGoBack}
            title={i18n.t('title', i18nOptions)}
            rightButton={{
              icon: 'save',
              color: '#666666',
              onPress: this.handleSubmitPress,
            }}
          />
        )}
        fullScreen
        loading={loading}
      >
        <PostEditor
          ref={(ref) => { this.postEditor = ref; }}
          initialValues={initialPost}
          onSubmit={this.handleSubmit}
        />
      </InputScreenView>
    );
  }
}
