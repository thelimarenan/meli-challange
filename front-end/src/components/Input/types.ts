import { ChangeEvent, FocusEvent } from 'react';

export type Props = {
  name: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};
