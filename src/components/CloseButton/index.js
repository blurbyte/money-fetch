import React from 'react';
import PropTypes from 'prop-types';

import RegularButton from '../Button';
import CloseCross from '../Icons/CloseCross';

const Button = RegularButton.extend`
  position: absolute;
  top: 0;
  right: 0;
  width: 5.6rem;
  height: 4rem;
`;

const CloseButton = ({onClick}) => {
  return (
    <Button onClick={onClick}><CloseCross /></Button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func
};

export default CloseButton;
