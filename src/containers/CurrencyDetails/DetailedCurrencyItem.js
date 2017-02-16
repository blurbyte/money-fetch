import styled from 'styled-components';

const DetailedCurrencyItem = styled.li`
  background-color: #fff;
  width: 26.4rem;
  height: 14.4rem;
  margin: 0.6rem;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px -1px rgba(40,40,40,0.1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'OpenSans Bold', Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  color: #777;
  transition: all 0.1s ease;

  &:hover {
    background-color: rgba(32,32,186,0.2);
  }

  &:active {
    background-color: rgba(32,32,186,0.4);
    box-shadow: 0 1px 1px -1px rgba(80,80,80,0.1);
  }
`;

export default DetailedCurrencyItem;
