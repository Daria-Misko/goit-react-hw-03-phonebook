import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

const DelButton = styled.button`
  padding: 2px;
  width: 90px;
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  color: #75706c;
  background: transparent;

  outline: none;
  cursor: pointer;

  border: solid 1px #b3aca7;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;

  :hover {
    background: #b3aca7;
    color: #e2dedb;
  }
`;
export { ListItem, DelButton };
