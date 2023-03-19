import React, { FunctionComponent } from "react";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Tag: FunctionComponent<TagProps> = (props) => {
  return (
    <span
      className="bg-purple-500 rounded text-white text-xs p-1 px-2 cursor-pointer"
      {...props}
    >
      {props.children}
    </span>
  );
};

export const Badge: FunctionComponent<TagProps> = (props) => {
  return (
    <span
      className="bg-purple-500 rounded text-white text-xs p-1 px-2 cursor-pointer"
      {...props}
    >
      {props.children}
    </span>
  );
};
