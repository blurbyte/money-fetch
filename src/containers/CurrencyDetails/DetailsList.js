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

  & .animated-list-enter {
    opacity: 0;
  }

  & .animated-list-enter.animated-list-enter-active {
    opacity: 1;
    transition: opacity 0.4s ease-out;
  }

  & .animated-list-leave {
    opacity: 1;
  }

  & .animated-list-leave.animated-list-leave-active {
    opacity: 0;
    ${media.phone`height: 0;`}
    transition: all 0.3s ease-out;
  }
`;

export default DetailsList;
