import styled, { css } from 'styled-components';

const StyledItem = styled.li`
  background-color: #fff;
  width: 8rem;
  height: 4rem;
  margin: 0.6rem;
  box-shadow: 0 2px 2px -1px rgba(40,40,40,0.1);
  cursor: ${props => props.selected ? 'default' : 'pointer'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'OpenSans Bold', Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  color: #777;
  transition: all 0.1s ease;
  opacity: ${props => props.selected ? 0.3 : 1};

  ${props => {
    if (!props.selected) {
      return css`
      &:hover {
    background-color: #d2d2f1;
  }

  &:active {
    background-color: #a5a5e3;
    box-shadow: 0 1px 1px -1px rgba(80,80,80,0.1);
  }
      `;
    }
  }}


`;

export default StyledItem;
