import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: auto;
`

export const Main = styled.main`
  height: 55vh;
  width: 380px;
  background-color: black;
  padding: 32px;
  border-radius: 16px;

  input,
  button {
    font: 700 15px Roboto;
    color: ${props => props.theme.colors.text};
  }
`
export const Input = styled.input`
  border: 0;
  height: 45px;
  border-radius: 8px;
  background-color: #1c1c1c;
  text-align: center;
  width: 100%;
  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none;
    border: 2px solid #1db954;
  }
`

export const InputGroupDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 12px;

  input {
    width: 48%;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 45px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #1db954;
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 32px;
`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-left: 20%;
`
