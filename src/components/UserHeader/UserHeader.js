import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';

const UserHeader = ({
  onBack,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'arrow-back',
      onPress: onBack,
    }}
  />
);

UserHeader.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default UserHeader;
