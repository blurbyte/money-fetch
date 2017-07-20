import React from 'react';
import PropTypes from 'prop-types';

const CloseCross = ({width = 40, height = 40, fill = '#bbb'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 40">
    <path fill="none" stroke={fill} strokeMiterlimit="10" d="M9.394 30.607L30.606 9.394M9.394 9.393l21.212 21.213" />
  </svg>
);

CloseCross.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
};

export default CloseCross;
