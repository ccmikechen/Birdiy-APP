import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import i18n from 'i18n-js';

import InputScreenView from '../../components/InputScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import PostEditor from '../../components/PostEditor';

import CreatePostMutation from '../../mutations/CreatePostMutation';

import {
  showCreatePostSuccessAlert,
  showCreatePostFailedAlert,
  showGoBackAlert,
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

    this.initialPost = {
      relatedProject: relatedProject || {
        type: 'custom',
        name: '',
        id: null,
      },
      message: '',
      photos: [],
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

    const mutation = new CreatePostMutation(values).setHook(spinner);

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

  handleGoBack = () => {
    const { navigation } = this.props;
    showGoBackAlert().then(() => navigation.goBack());

    return true;
  };

  render() {
    const { navigation } = this.props;

    return (
      <InputScreenView
        navigation={navigation}
        renderHeader={() => (
          <NormalBackHeader
            onBack={this.handleGoBack}
            title={i18n.t('post.create.title')}
            rightButton={{
              icon: 'send',
              color: '#666666',
              onPress: this.handleSubmitPress,
            }}
          />
        )}
        fullScreen
      >
        <PostEditor
          ref={(ref) => { this.postEditor = ref; }}
          initialValues={this.initialPost}
          onSubmit={this.handleSubmit}
        />
      </InputScreenView>
    );
  }
}
