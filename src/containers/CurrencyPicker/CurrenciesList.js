import styled from 'styled-components';
import media from '../../styles/media';

const CurrenciesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0.6rem 2rem 0rem 2rem;
  padding: 0;
  padding-bottom: 4rem;
  list-style: none;
  ${media.phone`
    justify-content: center;
  `}
`;

export default CurrenciesList;
