import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding:5px 10px;
  background: #A45EE3;
  border-radius:12px;
  border: none;
  font-weight:500;
  font-size:16px;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color:#C584D8;
    color: white;
    transition: 0.3s background ease-in;
  }
`;