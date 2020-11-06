import React from 'react';

import { SeachDetailAPI } from '../../services/SearchApi';
import {
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
} from './styles';
import useSearch from '../../hooks/useSearch';
import formatMoney from '../../utils/formatMoney';
import Button from '../../components/Button';

const ItemDetail: React.FC = () => {
  const { data } = useSearch<SeachDetailAPI>();

  return (
    <Wrap>
      <Content>
        {data?.item && (
          <>
            <Picture src={data?.item?.picture} />
            <SummaryInfo>
              <ItemCondition>
                {data?.item?.condition} - {data?.item?.sold_quantity} vendidos
              </ItemCondition>
              <ItemTitle>{data?.item?.title}</ItemTitle>
              <ItemPrice>
                {formatMoney(data?.item?.price.amount)}
                {data.item.price.decimals !== 0 && (
                  <span>{data.item.price.decimals}</span>
                )}
              </ItemPrice>
              <Button>Comprar</Button>
            </SummaryInfo>
            <DetailInfo>
              <DescriptionTitle>Descrição do produto</DescriptionTitle>
              <ItemDescription>{data.item.description}</ItemDescription>
            </DetailInfo>
          </>
        )}
      </Content>
    </Wrap>
  );
};

export default ItemDetail;
