import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import i18n from 'i18n-js';

import '../../locales';

import styles from './styles';

const ExtensibleSectionContent = ({
  moreButtonText,
  onMorePress,
  renderContent,
}) => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      {renderContent()}
    </View>
    <View style={styles.moreButtonContainer}>
      <TouchableOpacity
        style={styles.moreButton}
        onPress={onMorePress}
      >
        <Text style={styles.moreButtonText}>
          {moreButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

ExtensibleSectionContent.propTypes = {
  moreButtonText: PropTypes.string,
  onMorePress: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
};

ExtensibleSectionContent.defaultProps = {
  moreButtonText: i18n.t('general.more'),
};

export default ExtensibleSectionContent;
