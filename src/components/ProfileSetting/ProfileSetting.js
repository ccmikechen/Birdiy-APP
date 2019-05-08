import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import EditSection from '../EditSection';
import PureTextInput from '../PureTextInput';
import Avatar from '../Avatar';

import Size from '../../constants/Size';

import styles from './styles';

const ProfileSetting = (props) => {
  const { profile, onChange, onChangeImage } = props;

  return (
    <View style={styles.container}>
      <EditSection title="大頭貼照">
        <View style={styles.avatarContainer}>
          <Avatar
            image={profile.image}
            onPress={onChangeImage}
            size={Size.profileSettingImageSize}
            borderRadius={Size.profileSettingImageSize / 2}
            onUpload={({ uri }) => onChange({ image: uri })}
            editable
          />
        </View>
      </EditSection>
      <EditSection title="名稱">
        <PureTextInput
          style={styles.textInput}
          value={profile.name}
          placeholder="輸入你的名稱"
          onChangeText={value => onChange({ name: value })}
          maxLength={20}
          counter
        />
      </EditSection>
    </View>
  );
};

ProfileSetting.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  }),
  onChange: PropTypes.func,
  onChangeImage: PropTypes.func,
};

ProfileSetting.defaultProps = {
  profile: {
    name: '',
  },
  onChange: () => {},
  onChangeImage: () => {},
};

export default ProfileSetting;
