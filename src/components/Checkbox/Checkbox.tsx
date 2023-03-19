import React, { FunctionComponent } from "react";
import "./Checkbox.css";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  text: string;
  error?: string | string[] | undefined;
  hint?: string;
  showLabel?: boolean;
}

export const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
  const { label, text, hint, error, showLabel = true, ...rest } = props;

  return (
    <div className="flex-1 w-full">
      {showLabel && (
        <label
          htmlFor={props.id}
          className="block text-xs font-bold leading-5 text-gray-800"
        >
          {props.label}
          {props.required && <b className="text-red-500">*</b>}
        </label>
      )}
      <div className="flex item-center gap-x-1.5 mb-xlarge my-1">
        <label
          htmlFor={props.id}
          className="flex items-center cursor-pointer w-full flex-grow-1"
        >
          <input
            type="checkbox"
            {...rest}
            className="appearance-none form-checkbox w-[20px] h-[20px] rounded-base text-violet-60 focus:ring-0 mr-small border-grey-30 text-purple-500 border border-gray-300 rounded shadow-sm"
          />
          {text}
        </label>
      </div>
      {hint && <div className="text-xs text-gray-500">{hint}</div>}
      {props.error && typeof props.error === "object" ? (
        props.error.map((err, i) => (
          <div key={i} className="text-xs text-red-500">
            {err}
          </div>
        ))
      ) : (
        <div className="text-xs text-red-500">{props.error}</div>
      )}
    </div>
  );
};
