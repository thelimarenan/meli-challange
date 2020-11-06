import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import DefaultTemplate from '../../templates/DefaultTemplate';
import Breadcrumbs from '../../modules/Breadcrumbs';
import ItemDetail from '../../modules/ItemDetail';

const Items: React.FC = () => {
  const { query, replace } = useRouter();

  useEffect(() => {
    if (!query.id) {
      replace('/');
    }
  }, [query]);

  return (
    <DefaultTemplate>
      <Breadcrumbs />
      <ItemDetail />
    </DefaultTemplate>
  );
};

export default Items;
