import styled, { keyframes } from 'styled-components';

const reveal = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrap = styled.div`
  width: 100%;

  display: grid;
  grid-template: 1fr / 1fr 10fr 1fr;
  gap: 16px;

  padding: 0px 32px;
`;

const Content = styled.nav`
  grid-column-start: 2;
  grid-column-end: 2;

  animation: ${reveal} 0.8s ease forwards;

  background-color: #ffffff;
  border-radius: 4px;
  min-height: 50vh;
  padding: 16px;
  margin-bottom: 32px;
`;

const ItemContainer = styled.a`
  display: grid;
  grid-template: 1fr / 180px 1fr;
  gap: 16px;

  border-bottom: solid 2px ${props => props.theme.grayGallery};
  padding: 16px 0px;

  text-decoration: none;

  &:last-child {
    border-bottom: none;
  }
`;

const Thumbnail = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 4px;
`;

const Description = styled.div`
  color: ${props => props.theme.mineShaftGray};
  display: grid;
  grid-template: 1fr 2fr / 6fr 3fr;
`;

const Price = styled.div`
  font-size: 24px;
  margin-bottom: 32px;

  display: flex;
  align-items: flex-end;
  & > span {
    font-size: 14px;
    margin-left: 5px;
    margin-bottom: 3px;
  }
  & > img {
    margin-left: 16px;
    margin-bottom: 3px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  padding-right: 16px;
`;

const Origin = styled.div`
  font-size: 12px;
  color: ${props => props.theme.doveGray};
  padding-top: 15px;
`;

export {
  Wrap,
  Content,
  ItemContainer,
  Thumbnail,
  Description,
  Price,
  Title,
  Origin
};
