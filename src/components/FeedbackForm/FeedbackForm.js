import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
} from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import i18n from 'i18n-js';

import Colors, { Primary } from '../../constants/Colors';

import styles from './styles';

const i18nOptions = { scope: 'feedback' };

export default class FeedbackForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    type: 'feature',
    message: '',
  };

  renderSelectionButton = (text, value) => {
    const { type } = this.state;

    return (
      <CheckBox
        title={text}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.selectionButtonContainer}
        wrapperStyle={styles.selectionButton}
        textStyle={styles.selectionButtonText}
        checkedColor={Primary(700)}
        checked={type === value}
        onPress={() => this.setState({ type: value })}
      />
    );
  };

  render() {
    const { type, message } = this.state;
    const { onSubmit } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.selectionContainer}>
          {this.renderSelectionButton(i18n.t('type.feature', i18nOptions), 'feature')}
          {this.renderSelectionButton(i18n.t('type.bug', i18nOptions), 'bug')}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder={i18n.t('placeholder', i18nOptions)}
            placeholderTextColor={Colors.placeholder}
            multiline
            textBreakStrategy="simple"
            onChangeText={value => this.setState({ message: value })}
          />
        </View>
        <Button
          title={i18n.t('submit', i18nOptions)}
          titleStyle={styles.submitButtonText}
          containerStyle={styles.submitButtonContainer}
          buttonStyle={styles.submitButton}
          onPress={() => onSubmit({ type, message })}
        />
      </View>
    );
  }
}
