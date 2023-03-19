import React, { FunctionComponent } from "react";
import "./Card.css";

export const Card: FunctionComponent<{ children: any }> = (props) => {
  return (
    <div className="card bg-white rounded-lg p-4 lg:p-8 m-4 lg:m-8 my-4 border border-gray-200">
      {props.children}
    </div>
  );
};
