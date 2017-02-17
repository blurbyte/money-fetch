import React, { PropTypes } from 'react';
import styled from 'styled-components';

import RegularButton from '../Button';
import CloseCross from '../Icons/CloseCross';

const Button = styled(RegularButton) `
  position: absolute;
  top: 0;
  right: 0;
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
