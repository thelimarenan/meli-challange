import React from 'react';

import { Props } from './types';
import {
  Wrap,
  Content,
  ItemContainer,
  Thumbnail,
  Description,
  Price,
  Title,
  Origin
} from './styles';
import useSearch from '../../hooks/useSearch';
import formatMoney from '../../utils/formatMoney';

const ItemsList: React.FC<Props> = () => {
  const BEGIN = 0;
  const LIMIT = 4;

  const { data } = useSearch();

  return (
    <Wrap>
      <Content>
        {data?.items.slice(BEGIN, LIMIT).map(item => (
          <ItemContainer key={item.id} href={`/items/${item.id}`}>
            <Thumbnail src={item.picture} />
            <Description>
              <Price>
                {formatMoney(item.price.amount)}
                {item.price.decimals !== 0 && (
                  <span>{item.price.decimals}</span>
                )}
                {item.free_shipping && (
                  <img
                    src="/images/ic_shipping.png"
                    alt="It is free shipping"
                  />
                )}
              </Price>
              <Origin>{item.region}</Origin>
              <Title>{item.title}</Title>
            </Description>
          </ItemContainer>
        ))}
      </Content>
    </Wrap>
  );
};

export default ItemsList;
