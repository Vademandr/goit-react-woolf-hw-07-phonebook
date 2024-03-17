import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  border: 1px solid black;
  width: 320px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  text-align: left;
`;
export const Input = styled.input`
   width: 300px;
  height: 24px;
  outline: transparent;
  padding: 0 8px;
  border: 1px solid #000;
  &:hover,
  &:focus {
    border: 1px solid blue;
`;
export const Button = styled.button`
  width: 320px;  
  padding: 6px;
  font-size: 18px;
  cursor: pointer;
  border: transparent;
  border: 1px solid black;
  border-radius: 8px;
  background-color: gray;
  &:hover {
    background-color: blue;
    color: #fff;
  }
`;
