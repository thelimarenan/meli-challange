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

const Content = styled.main`
  grid-column-start: 2;
  grid-column-end: 2;
  display: grid;
  grid-template: 680px 3fr / 7fr 3fr;

  animation: ${reveal} 0.8s ease forwards;

  background-color: #ffffff;
  border-radius: 4px;
  min-height: 50vh;
  padding: 32px;
  margin-bottom: 32px;
`;

const Picture = styled.img`
  width: 100%;
  max-width: 680px;
`;

const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 32px;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ItemCondition = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

const ItemTitle = styled.div`
  font-size: 24px;
  margin-bottom: 32px;
`;

const ItemPrice = styled.div`
  font-size: 46px;
  margin-bottom: 32px;
  & > span {
    font-size: 24px;
  }
`;

const DescriptionTitle = styled.div`
  font-size: 28px;
  margin-bottom: 32px;
`;

const ItemDescription = styled.div`
  font-size: 16px;
  color: ${props => props.theme.doveGray};
  margin-bottom: 32px;
`;

export {
  Wrap,
  Content,
  Picture,
  SummaryInfo,
  DetailInfo,
  ItemCondition,
  ItemTitle,
  ItemPrice,
  DescriptionTitle,
  ItemDescription
};
