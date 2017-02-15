import React from 'react';

// components
import Banner from './Banner';
import HomeLink from './HomeLink';
import Logo from '../Icons/Logo';

const Header = () => (
  <Banner>
    <HomeLink to="/"><Logo width={340} height={48} /></HomeLink>
  </Banner>
);

export default Header;
