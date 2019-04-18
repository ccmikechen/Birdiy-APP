import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import SimpleScreenView from '../SimpleScreenView';
import scrollViewTrigger from '../../helpers/scrollViewTrigger';
import LoadingIndicator from '../LoadingIndicator';

import styles from './styles';

const TriggerScrollView = scrollViewTrigger(ScrollView);

const TopScreenView = (props) => {
  const { children, loading } = props;

  return (
    <SimpleScreenView {...props}>
      <TriggerScrollView>
        <View style={styles.paddingView} />
        {loading ? <LoadingIndicator /> : children}
      </TriggerScrollView>
    </SimpleScreenView>
  );
};

TopScreenView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  loading: PropTypes.bool,
};

TopScreenView.defaultProps = {
  children: null,
  loading: false,
};

export default TopScreenView;
