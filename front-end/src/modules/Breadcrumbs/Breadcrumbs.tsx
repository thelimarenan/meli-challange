import React, { useEffect } from 'react';

import { Props } from './types';
import { Wrap, Content, Crumb } from './styles';
import useSearch from '../../hooks/useSearch';

const Breadcrumbs: React.FC<Props> = () => {
  const { data } = useSearch();

  return (
    <Wrap>
      <Content>
        {data?.categories?.map(crumb => (
          <Crumb key={crumb} href={`/items?search=${encodeURI(crumb)}`}>
            {crumb}
          </Crumb>
        ))}
      </Content>
    </Wrap>
  );
};

export default Breadcrumbs;
