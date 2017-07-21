import React from 'react';
import PropTypes from 'prop-types';

import { CSSTransitionGroup } from 'react-transition-group';

const AnimatedList = ({children, className}) => {
  return (
    <CSSTransitionGroup
      className={className}
      component="ul"
      transitionName="animated-list"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={300}>
      {children}
    </CSSTransitionGroup>
  );
};

AnimatedList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default AnimatedList;
