import React, { PropTypes } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const AnimatedList = ({children, className}) => {
  return (
    <ReactCSSTransitionGroup
      className={className}
      component="ul"
      transitionName="animated-list"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={300}>
      {children}
    </ReactCSSTransitionGroup>
  );
};

AnimatedList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default AnimatedList;
