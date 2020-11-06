import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import DefaultTemplate from '../../templates/DefaultTemplate';
import Breadcrumbs from '../../modules/Breadcrumbs';
import ItemsList from '../../modules/ItemsList';

const Items: React.FC = () => {
  const { query, replace } = useRouter();

  useEffect(() => {
    if (!query.search) {
      replace('/');
    }
  }, [query]);

  return (
    <DefaultTemplate>
      <Breadcrumbs />
      <ItemsList />
    </DefaultTemplate>
  );
};

export default Items;
