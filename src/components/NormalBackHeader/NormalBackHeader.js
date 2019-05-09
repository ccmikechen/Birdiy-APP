import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from '../BasicHeader';

import Colors from '../../constants/Colors';

const NormalBackHeader = (props) => {
  const {
    title, onBack, rightButton, iconColor,
  } = props;

  return (
    <BasicHeader
      {...props}
      placement="center"
      leftButton={{
        icon: 'arrow-back',
        onPress: onBack,
        color: iconColor,
      }}
      centerComponent={{
        title,
        style: { fontSize: 20 },
      }}
      rightButton={rightButton}
    />
  );
};

const rightButtonShape = PropTypes.shape({
  icon: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
});

NormalBackHeader.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func.isRequired,
  rightButton: PropTypes.oneOfType([
    rightButtonShape,
    PropTypes.arrayOf(rightButtonShape),
  ]),
  iconColor: PropTypes.string,
};

NormalBackHeader.defaultProps = {
  title: '',
  rightButton: null,
  iconColor: Colors.headerIcon,
};

export default NormalBackHeader;
