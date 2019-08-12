import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import i18n from 'i18n-js';

import SimpleScreenView from '../../components/SimpleScreenView';
import NormalBackHeader from '../../components/NormalBackHeader';
import PostEditor from '../../components/PostEditor';

import CreatePostMutation from '../../mutations/CreatePostMutation';

import {
  showGoBackAlert,
  showCreatePostLimitAlert,
} from '../../helpers/alert';
import {
  showCreatePostSuccessMessage,
  showCreatePostFailedMessage,
} from '../../helpers/toast';
import TimesRecord from '../../helpers/TimesRecord';

const CREATE_LIMIT_HOURS = 24;
const CREATE_LIMIT_TIMES = 3;

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
    query: PropTypes.shape({
      viewer: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    query: null,
  };

  createTimesRecord = new TimesRecord(
    CREATE_LIMIT_TIMES,
    1000 * 60 * 60 * CREATE_LIMIT_HOURS,
  );

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
    this.createTimesRecord.load('createPostTimesRecord');
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleGoBack);
  }

  handleSubmitPress = () => {
    this.postEditor.submit();
  };

  handleSubmit = (values) => {
    if (!this.createTimesRecord.isValid()) {
      showCreatePostLimitAlert(CREATE_LIMIT_HOURS, CREATE_LIMIT_TIMES);
      return;
    }

    const { navigation, screenProps: { spinner }, query } = this.props;

    const mutation = new CreatePostMutation(
      values,
      query.viewer,
    ).setHook(spinner, i18n.t('general.saving'));

    mutation.commit()
      .then((res) => {
        if (res.errors) {
          this.handleSubmittingError();

          return;
        }
        this.createTimesRecord.addRecord();
        navigation.goBack();
        showCreatePostSuccessMessage();
      })
      .catch(this.handleSubmittingError);
  };

  handleSubmittingError = () => {
    showCreatePostFailedMessage();
  };

  handleGoBack = () => {
    const { navigation } = this.props;
    showGoBackAlert().then(() => navigation.goBack());

    return true;
  };

  render() {
    return (
      <SimpleScreenView
        {...this.props}
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
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          enableOnAndroid
        >
          <PostEditor
            ref={(ref) => { this.postEditor = ref; }}
            initialValues={this.initialPost}
            onSubmit={this.handleSubmit}
          />
        </KeyboardAwareScrollView>
      </SimpleScreenView>
    );
  }
}
