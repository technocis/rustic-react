import React from "react";
import { forwardRef, FunctionComponent } from "react";
import { AccessKey } from "../AccessKey/AccessKey";
import { Loader } from "../Loader/Loader";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | "primary"
    // | "secondary"
    // | "success"
    | "danger"
    // | "warning"
    // | "info"
    | "outline"
    | "light";
  // | "dark";
  loading?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    color = "primary",
    loading = false,
    children,
    accessKey,
    ...rest
  } = props;

  const classes = {
    primary: "bg-purple-500 hover:bg-purple-700 text-white",
    light: "bg-white hover:bg-gray-100 text-gray-800",
    outline: "bg-white hover:bg-gray-100 text-gray-800 border border-gray-200",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  return (
    <button
      ref={ref}
      accessKey={accessKey}
      className={`flex items-center text-sm font-bold py-2 rounded focus:outline-none focus:shadow-outline disabled:opacity-75 ${classes[color]}`}
      {...rest}
      title={accessKey && `Alt + ${accessKey}`}
    >
      {loading && (
        <span className="flex items-center px-4">
          <Loader size={15} color={"white"} />
          <span className="ml-2">Please Wait</span>
        </span>
      )}
      {!loading && <div className="px-4 flex items-center">{children}</div>}
      {accessKey && <AccessKey shortcut={accessKey} />}
    </button>
  );
});
