import styled from 'styled-components';
import media from '../../styles/media';

const Headline = styled.h2`
  font-family: 'OpenSans Light', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 2.4rem;
  letter-spacing: -0.2rem;
  color: #777;
  border-bottom: ${props => props.vivid ? '1px solid #eee' : '1px solid #ccc'};
  border-top: ${props => props.vivid ? '1px solid #ccc' : 'none'};
  line-height: 1.2;
  padding: 1.2rem 2.2rem 0.6rem 2.2rem;
  margin: 0;
  background-color: ${props => props.vivid ? '#fff' : 'rgba(255,255,255, 0.4)'};
  ${media.phone`text-align: center;`}
`;

export default Headline;
