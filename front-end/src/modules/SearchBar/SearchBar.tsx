import React from 'react';
import { useFormik } from 'formik';

import { FormFields, Props } from './types';
import { Input } from '../../components';
import { SearchForm } from './styles';

const SearchBar: React.FC<Props> = ({ search, handleSearch }) => {
  const formik = useFormik<FormFields>({
    initialValues: {
      search
    },
    onSubmit: values => handleSearch(`items?search=${values.search}`)
  });

  return (
    <SearchForm onSubmit={formik.handleSubmit}>
      <Input
        placeholder="Nunca dejes de buscar"
        name="search"
        onChange={formik.handleChange}
        value={formik.values.search}
      />
    </SearchForm>
  );
};

export default SearchBar;
