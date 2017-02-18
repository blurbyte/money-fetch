import { IndexLink } from 'react-router';
import styled from 'styled-components';
import media from '../../styles/media';

const HomeLink = styled(IndexLink)`
  display: inline-block;
  padding-left: 2.2rem;
  & svg {
    ${media.phone`width: 30rem; `}
  }
`;

export default HomeLink;
