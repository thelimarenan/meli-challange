import React from 'react';
import { useRouter } from 'next/router';

import { Props } from './types';
import SearchBar from '../../modules/SearchBar';
import { Wrap, HeaderBar, Content, LogoMeli } from './styles';

const DefaultTemplate: React.FC<Props> = ({ children }) => {
  const { query, push } = useRouter();
  const search = typeof query.search === 'string' ? query.search : '';

  return (
    <Wrap>
      <HeaderBar>
        <Content>
          <LogoMeli href="/">Mercado Livre</LogoMeli>
          <SearchBar handleSearch={url => push(url)} search={search} />
        </Content>
      </HeaderBar>
      {children}
    </Wrap>
  );
};

export default DefaultTemplate;
