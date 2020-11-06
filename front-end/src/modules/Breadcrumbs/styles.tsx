import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  height: 46px;

  display: grid;
  grid-template: 1fr / 1fr 10fr 1fr;
  gap: 16px;

  padding: 0px 32px;
`;

const Content = styled.nav`
  grid-column-start: 2;
  grid-column-end: 2;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Crumb = styled.a`
  font-size: 14px;
  color: ${props => props.theme.dustyGray};
  font-weight: bold;
  text-decoration: none;
  &:not(:last-child) {
    font-weight: normal;
    &::after {
      content: '';
      display: inline-block;
      transform: rotate(45deg) translateX(-2px);

      margin: 0px 7px;
      width: 5px;
      height: 5px;

      border: ${props => props.theme.dustyGray} solid;
      border-width: 1px 1px 0px 0px;
    }
  }
`;

export { Wrap, Content, Crumb };
