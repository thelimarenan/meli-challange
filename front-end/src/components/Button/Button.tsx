import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 12px 16px;
  background-color: ${props => props.theme.dodgerBlue};
  color: ${props => props.theme.grayGallery};
  border: none;
  border-radius: 4px;
`;

export default Button;
