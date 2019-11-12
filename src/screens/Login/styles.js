import styled from 'styled-components'

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const InnerWrapper = styled.div`
  width: 50%;
`

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 16px;
  width: 100%;
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;
`

export const Warning = styled.p`
${'' /* color:red; */}
`

export const Button = styled.button`
  max-width: 150px;
  margin: 20px 0;
  padding: 12px 20px;
  border-style: none;
  border-radius: 5px;
  background-color: #08c;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  & + button {
    margin-left: 0.5rem;
  }

  ${'' /* button.outline {
    background-color: #eee;
    border: 1px solid #aaa;
    color: #555;
  } */};
`
