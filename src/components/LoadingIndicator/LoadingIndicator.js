import React from 'react';
import { DotIndicator } from 'react-native-indicators';

import { Tertiary } from '../../constants/Colors';

const LoadingIndicator = () => (
  <DotIndicator color={Tertiary(300)} size={15} />
);

export default LoadingIndicator;
