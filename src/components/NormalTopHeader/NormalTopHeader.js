import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';

const NormalTopHeader = ({ title }) => (
  <BasicHeader
    placement="center"
    centerComponent={{
      title,
      style: { fontSize: 20 },
    }}
  />
);

NormalTopHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NormalTopHeader;
