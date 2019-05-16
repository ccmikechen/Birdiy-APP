import React from 'react';
import PropTypes from 'prop-types';
import PullToRefresh from 'react-native-pull-refresh';

import Size from '../../constants/Size';
import { Base } from '../../constants/Colors';

const refreshAnimation = require('./refresh-animation.json');

const Refresh = ({
  refreshing,
  onRefresh,
  animationBackgroundColor,
  children,
}) => (
  <PullToRefresh
    isRefreshing={refreshing}
    onRefresh={onRefresh}
    pullHeight={Size.refreshAnimationHeight}
    paddingTop={Size.headerHeight}
    animationBackgroundColor={animationBackgroundColor}
    contentView={children}
    onPullAnimationSrc={refreshAnimation}
    onStartRefreshAnimationSrc={refreshAnimation}
    onRefreshAnimationSrc={refreshAnimation}
    onEndRefreshAnimationSrc={refreshAnimation}
  />
);

Refresh.propTypes = {
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
  animationBackgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Refresh.defaultProps = {
  animationBackgroundColor: Base.light,
};

export default Refresh;
