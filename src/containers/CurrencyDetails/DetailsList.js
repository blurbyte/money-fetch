import styled from 'styled-components';
import media from '../../styles/media';

import AnimatedList from '../../components/AnimatedList';

const DetailsList = styled(AnimatedList)`
  position: relative;
  margin: 0;
  padding: 0;
  background: #fff;
  padding: 0.6rem 2rem 6rem 2rem;
  display: flex;
  flex-wrap: wrap;
  ${media.phone`
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  `}
`;

export default DetailsList;
