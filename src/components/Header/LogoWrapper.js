import styled from 'styled-components';
import media from '../../styles/media';

const LogoWrapper = styled.div`
  display: inline-block;
  padding: 0 2.2rem;

  & svg {
    ${media.phone`width: 28rem;`}
  }
`;

export default LogoWrapper;
