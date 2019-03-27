import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';

const NormalBackHeader = ({ title, onBack, rightButton }) => (
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
    rightButton={rightButton}
  />
);

const rightButtonShape = PropTypes.shape({
  icon: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
});

NormalBackHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  rightButton: PropTypes.oneOfType([
    rightButtonShape,
    PropTypes.arrayOf(rightButtonShape),
  ]),
};

NormalBackHeader.defaultProps = {
  rightButton: null,
};

export default NormalBackHeader;
