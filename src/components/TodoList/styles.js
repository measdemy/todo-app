import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1em auto;

  & > div {
    background-color: salmon;
    border-radius: 5px;
    padding: 1em;
    box-shadow: 5px 5px 5px #9e9e9e;
  }

  @media only screen and (max-width: 800px) {
    width: 80%;
  }

  @media only screen and (max-width: 500px) {
    width: 95%;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  & img {
    align-self: flex-end;
  }
`;

export const Grow = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 5px 4px #fb5f4d;
  margin-top: 5px;
  & > textarea {
    height: 100px;
    background-color: salmon;
    border: none;
    padding: 0 10px;
    outline-style: none;
    resize: none;
  }
  & > button {
    background: none;
    border: none;
    margin-left: auto;
    font-size: 15px;
    padding: 0 10px;
    text-transform: capitalize;
    cursor: pointer;
  }

  & > input {
    font-size: 1.5em;
    border: 1px solid white;
    background: salmon;
    border: none;
    padding: 10px;
    outline-style: none;
  }

  & > input:focus-visible,
  textarea:focus-visible {
    outline: none;
  }
`;

export const Title = styled.div`
  display: flex;
  & > img:nth-child(2) {
    margin-left: auto;
  }
  & h2 {
    margin-block: 0;
  }
`;

export const Image = styled.img`
  width: 18px;
  height: 18px;
  align-self: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  width: 50px;
  margin-left: auto;
  margin-top: 5px;
  cursor: pointer;
`;

export const ButtonSection = styled.div`
  margin-left: auto;
`;
