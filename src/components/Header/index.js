import React from 'react';

// components
import Banner from './Banner';
import LogoWrapper from './LogoWrapper';
import Logo from '../Icons/Logo';

const Header = () => (
  <Banner>
    <LogoWrapper><Logo width={340} height={48} /></LogoWrapper>
  </Banner>
);

export default Header;
