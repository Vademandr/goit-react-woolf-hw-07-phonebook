import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-position: inside;
  width: 450px;
  padding: 8px;
  border-radius: 12px;
  border: solid 1px #000;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const Wrapper = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  padding: 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-right: 8px;
  width: 100px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: gray;
  &:hover {
    background-color: blue;
    color: #fff;
  }
`;
export const ButtonModal = styled.button`
  margin-right: 10px;
  width: 100px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: gray;
  &:hover {
    background-color: blue;
    color: #fff;
  }
`;
