import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: ${props => props.theme.grayGallery};
`;

const HeaderBar = styled.header`
  width: 100%;
  height: 68px;

  background-color: ${props => props.theme.turboYellow};

  display: grid;
  grid-template: 1fr / 1fr 10fr 1fr;
  gap: 16px;

  padding: 0px 32px;
`;

const Content = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoMeli = styled.a`
  display: inline-block;

  width: 53px;
  height: 36px;
  background-image: url('/images/Logo_ML.png');

  color: transparent;
  font-size: 0px;
`;

export { Wrap, HeaderBar, Content, LogoMeli };
