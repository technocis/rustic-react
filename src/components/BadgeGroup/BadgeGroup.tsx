import React, { FunctionComponent } from "react";

export const BadgeGroup: FunctionComponent<{ children: any }> = (props) => {
  return (
    <div className="flex items-center gap-1 flex-wrap">{props.children}</div>
  );
};
