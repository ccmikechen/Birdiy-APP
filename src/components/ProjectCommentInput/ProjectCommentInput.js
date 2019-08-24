/* eslint-disable no-underscore-dangle */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  ViewPropTypes,
} from 'react-native';
import { Button } from 'react-native-paper';
import i18n from 'i18n-js';

import Avatar from '../Avatar';

import { TextColor, Primary } from '../../constants/Colors';

import styles from './styles';

const ProjectCommentInput = ({
  value,
  onChangeText,
  onSubmit,
  onCancel,
  onRequestLogin,
  style,
  user,
  avatarSize,
  submitButtonText,
  initialActive,
}) => {
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState(initialActive);
  const [height, setHeight] = useState(40);
  const input = React.createRef();

  useEffect(() => {
    if (initialActive) {
      input.current.focus();
    }
  }, []);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          <Avatar
            image={user ? user.image : null}
            size={avatarSize}
            borderRadius={avatarSize / 2}
          />
        </View>
        <View style={[
          styles.inputContainer,
          focus ? styles.inputContainerFocus : null,
        ]}
        >
          <TextInput
            ref={input}
            style={[styles.input, { height }]}
            value={value}
            onChangeText={onChangeText}
            placeholder={`${i18n.t('project.sections.comments.addComment')}...`}
            onFocus={() => {
              if (user) {
                setFocus(true);
                setActive(true);
              } else {
                onRequestLogin();
              }
            }}
            onBlur={() => setFocus(false)}
            onContentSizeChange={(event) => {
              setHeight(Math.max(40, event.nativeEvent.contentSize.height));
            }}
            maxLength={500}
            multiline
          />
        </View>
      </View>
      {active && (
        <View style={styles.buttonsContainer}>
          <Button
            color={TextColor.secondaryDark}
            onPress={() => {
              setActive(false);
              setFocus(false);
              onChangeText('');
              input.current.blur();
              onCancel();
            }}
          >
            {i18n.t('general.cancel')}
          </Button>
          <Button
            mode="contained"
            color={Primary(700)}
            onPress={() => {
              onSubmit();
              setActive(false);
              setFocus(false);
              onChangeText('');
              input.current.blur();
            }}
          >
            {submitButtonText}
          </Button>
        </View>
      )}
    </View>
  );
};

ProjectCommentInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onRequestLogin: PropTypes.func,
  style: ViewPropTypes.style,
  user: PropTypes.shape({
    image: PropTypes.string,
  }),
  avatarSize: PropTypes.number,
  submitButtonText: PropTypes.string.isRequired,
  initialActive: PropTypes.bool,
};

ProjectCommentInput.defaultProps = {
  value: '',
  onChangeText: () => {},
  onSubmit: () => {},
  onCancel: () => {},
  onRequestLogin: () => {},
  style: {},
  user: null,
  avatarSize: 30,
  initialActive: false,
};

export default ProjectCommentInput;
