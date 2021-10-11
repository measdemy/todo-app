import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: #e35343;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 5px salmon;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  @media only screen and (max-width: 800px) {
    width: 80%;
  }

  @media only screen and (max-width: 500px) {
    width: 95%;
  }
`;

export const Input = styled.input`
  border: none;
  margin: 5px 10px;
  padding: 5px;
  font-size: 15px;
  outline-style: none;
  border: none;

  &:hover {
    outline: none;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  margin-left: auto;
  font-size: 15px;
  padding: 10px;
  text-transform: capitalize;
  cursor: pointer;
`;

export const Textarea = styled.textarea`
  height: 100px;
  border: none;
  padding: 0 15px;
  outline-style: none;
  resize: none;
`;

export const Reverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
