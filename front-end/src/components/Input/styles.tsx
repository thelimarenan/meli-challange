import styled from 'styled-components';

const InputBase = styled.input`
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  outline: none;

  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.mineShaftGray};

  width: 100%;
  height: 36px;
  padding-left: 16px;

  &::placeholder {
    color: ${props => props.theme.dustyGray};
  }
`;

export { InputBase };
