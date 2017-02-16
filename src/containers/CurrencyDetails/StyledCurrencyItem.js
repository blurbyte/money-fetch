import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledCurrencyItem = styled.li`
  background-color: #fff;
  width: 26.4rem;
  height: 14.4rem;
  margin: 0.6rem;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px -1px rgba(40,40,40,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'OpenSans Bold', Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  color: #777;
  transition: all 0.1s ease;
  animation: ${fadeIn} 0.4s ease-out;

  &:hover {
    background-color: #e5f0e6;
  }
`;

export default StyledCurrencyItem;
