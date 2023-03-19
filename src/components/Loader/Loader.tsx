import React from "react";
import { FunctionComponent } from "react";
import "./Loader.css";

export const Loader: FunctionComponent<{
  text?: string;
  size?: number;
  color?: string;
}> = (props) => {
  const { size = 40, color = "purple-500" } = props;
  return (
    <div className="flex flex-col items-center">
      <div
        className="sk-cube-grid"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <div className={`sk-cube bg-${color} sk-cube1`}></div>
        <div className={`sk-cube bg-${color} sk-cube2`}></div>
        <div className={`sk-cube bg-${color} sk-cube3`}></div>
        <div className={`sk-cube bg-${color} sk-cube4`}></div>
        <div className={`sk-cube bg-${color} sk-cube5`}></div>
        <div className={`sk-cube bg-${color} sk-cube6`}></div>
        <div className={`sk-cube bg-${color} sk-cube7`}></div>
        <div className={`sk-cube bg-${color} sk-cube8`}></div>
        <div className={`sk-cube bg-${color} sk-cube9`}></div>
      </div>
      {props.text && (
        <span className="text-sm text-gray-700 mt-4">{props.text}</span>
      )}
    </div>
  );
};
