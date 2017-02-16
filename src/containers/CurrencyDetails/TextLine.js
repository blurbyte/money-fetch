import styled from 'styled-components';

const TextLine = styled.p`
  display: block;
  font-family: ${props => props.code ? 'OpenSans Bold' : 'OpenSans Light'};
  color: #777;
  font-size: ${props => props.name ? '1.6rem' : '3.2rem'};
  font-style: ${props => props.name ? 'italic' : 'none'};
  letter-spacing: ${props => props.name ? 0 : '-0.2rem'};
  line-height: 1.0;
  text-align: center;
  margin: 0.4rem;
`;

export default TextLine;
