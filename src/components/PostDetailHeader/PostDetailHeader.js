import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';

const PostDetailHeader = ({ title, onBack }) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'arrow-back',
      onPress: onBack,
    }}
    centerComponent={{
      title,
      style: { fontSize: 20 },
    }}
  />
);

PostDetailHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default PostDetailHeader;
