import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';
import SearchBarButton from '../SearchBarButton';

import Colors from '../../constants/Colors';

const UserProjectsHeader = ({
  onBack,
  onSearch,
}) => (
  <BasicHeader
    placement="center"
    leftButton={{
      icon: 'arrow-back',
      color: Colors.headerIcon,
      onPress: onBack,
    }}
    centerComponent={() => (
      <SearchBarButton onPress={onSearch} />
    )}
  />
);

UserProjectsHeader.propTypes = {
  onBack: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default UserProjectsHeader;
