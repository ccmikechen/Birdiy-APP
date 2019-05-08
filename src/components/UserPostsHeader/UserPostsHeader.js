import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

const UserPostsHeader = ({
  onBack,
  onSearch,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'arrow-back',
      onPress: onBack,
    }}
    centerComponent={() => (
      <SearchBarButton onPress={onSearch} />
    )}
  />
);

UserPostsHeader.propTypes = {
  onBack: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default UserPostsHeader;
