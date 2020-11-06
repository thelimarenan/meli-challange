import React from 'react';

import { Props } from './types';
import { InputBase } from './styles';

const Input: React.FC<Props> = ({
  name,
  type = 'text',
  disabled = false,
  value = '',
  placeholder,
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <InputBase
      name={name}
      type={type}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
    />
  );
};

export default Input;
