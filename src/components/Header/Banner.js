import styled from 'styled-components';
import media from '../../styles/media';


const Banner = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
  height: 8rem;
  box-shadow: 0 2px 2px -1px rgba(40,40,40,0.1);
  background: #fff;
  ${media.phone`justify-content: center;`}
`;

export default Banner;
