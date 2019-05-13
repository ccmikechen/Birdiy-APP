import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopScreenView from '../../components/TopScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import PostEditor from '../../components/PostEditor';

import CreatePostMutation from '../../mutations/CreatePostMutation';

import {
  showCreatePostSuccessAlert,
  showCreatePostFailedAlert,
} from '../../helpers/alert';

export default class CreatePostScreen extends Component {
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
  };

  constructor(props) {
    super(props);

    const relatedProject = props.navigation.getParam('relatedProject');

    this.state = {
      post: {
        relatedProject: relatedProject || {
          type: 'custom',
          name: '',
          id: null,
        },
        message: '',
        photos: [],
      },
    };
  }

  handleChange = (data) => {
    const { post } = this.state;
    this.setState({ post: { ...post, ...data } });
  };

  handleSubmit = () => {
    const { navigation, screenProps: { spinner } } = this.props;
    const { post } = this.state;
    const mutation = new CreatePostMutation(post).setHook(spinner);

    mutation.commit()
      .then((res) => {
        if (res.errors) {
          this.handleSubmittingError();

          return;
        }
        navigation.goBack();
        showCreatePostSuccessAlert();
      })
      .catch(this.handleSubmittingError);
  };

  handleSubmittingError = () => {
    showCreatePostFailedAlert();
  };

  render() {
    const { navigation } = this.props;
    const { post } = this.state;

    return (
      <TopScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={() => navigation.goBack()}
            title="發佈投稿"
            rightButton={{
              icon: 'send',
              color: '#666666',
              onPress: this.handleSubmit,
            }}
          />
        )}
        fullScreen
      >
        <PostEditor
          post={post}
          onChange={this.handleChange}
        />
      </TopScreenView>
    );
  }
}
