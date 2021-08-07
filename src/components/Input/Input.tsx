import React from 'react';
import './Input.css';

export interface CISInputProps {
  size?: 'small' | 'default' | 'large';
  theme?: 'light' | 'dark',
  type?: string;
  label?: string;
  placeholder?: string;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
}

export const CISInput = ({
  placeholder = "",
  size = 'default',
  label = placeholder,
  theme = 'light',
  type= "text",
  prefix,
  suffix,
  ...props
}: CISInputProps) => {
  return (
    <div className={`input input--${size}`}>
      {prefix && prefix}
      <input className={['input__field', `input__field--${theme}`].join(' ')} aria-label={label} placeholder={placeholder} type={type} {...props}></input>
      {suffix && suffix}
    </div>
  );
};
