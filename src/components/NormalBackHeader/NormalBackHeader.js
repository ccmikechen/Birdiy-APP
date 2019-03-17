import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';

const NormalBackHeader = ({ title, onBack }) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'arrow-back',
      color: '#ffffff',
      onPress: onBack,
    }}
    centerComponent={{
      title,
      style: { color: '#ffffff', fontSize: 20 },
    }}
  />
);

NormalBackHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default NormalBackHeader;
