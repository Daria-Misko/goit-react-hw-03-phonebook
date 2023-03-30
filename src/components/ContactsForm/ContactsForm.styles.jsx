import styled from 'styled-components';

const Form = styled.form`
  width: 500px;
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SubButton = styled.button`
  width: 502px;
  padding: 10px;
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

const Input = styled.input`
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  width: 470px;
  height: 50px;
  padding: 0px 15px 0px 15px;

  background: transparent;
  outline: none;
  color: #726659;

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

export { Form, SubButton, Input };
