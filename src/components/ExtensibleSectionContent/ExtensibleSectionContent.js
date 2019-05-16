import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import i18n from 'i18n-js';

import MoreButton from '../MoreButton';

import styles from './styles';

const ExtensibleSectionContent = ({
  onMorePress,
  renderContent,
}) => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      {renderContent()}
    </View>
    <View style={styles.moreButtonContainer}>
      <MoreButton
        onPress={onMorePress}
        text={i18n.t('general.more')}
      />
    </View>
  </View>
);

ExtensibleSectionContent.propTypes = {
  onMorePress: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
};

export default ExtensibleSectionContent;
