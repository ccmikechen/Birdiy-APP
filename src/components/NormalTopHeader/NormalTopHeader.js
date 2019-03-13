import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';

const NormalTopHeader = ({ title, onOpenDrawer }) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'menu',
      color: '#ffffff',
      onPress: onOpenDrawer,
    }}
    centerComponent={{
      title,
      style: { color: '#ffffff', fontSize: 20 },
    }}
  />
);

NormalTopHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onOpenDrawer: PropTypes.func.isRequired,
};

export default NormalTopHeader;