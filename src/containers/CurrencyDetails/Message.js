import styled from 'styled-components';
import media from '../../styles/media';

const Message = styled.p`
  font-style: italic;
  margin: 0;
  font-size: 1.6rem;
  color: #bbb;
  position: absolute;
  width: 34rem;
  top: 0.6rem;
  left: 2rem;
  display: block;
  ${media.phone`text-align: center;`}
`;

export default Message;
