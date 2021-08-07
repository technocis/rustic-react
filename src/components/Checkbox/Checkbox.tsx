import React from 'react';
import './Checkbox.css';

export interface CISCheckboxProps {
  label: string;
}

export const CISCheckbox = ({
  label = "Click",
  ...props
}: CISCheckboxProps) => {
  return (
    <label className="checkbox">
      <div className="checkbox__box">
        <input type="checkbox" {...props}/>
        <svg viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path></svg>
      </div>
      <div className="checkbox__label">{label}</div>
    </label>
  );
};
