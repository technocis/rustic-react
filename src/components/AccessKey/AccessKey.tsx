import React from "react";

export const AccessKey = (props: { shortcut: string; trigger?: string }) => {
  const { shortcut, trigger } = props;
  return (
    <span className="mr-2">
      <span
        className="bg-transparent border border-gray-100 rounded p-1 text-xs font-bold text-white"
        style={{ paddingTop: "0.1rem", paddingBottom: "0.1rem" }}
      >
        {/* {trigger || <>Alt</>} + {shortcut} */}
        {trigger || <>&#x2387;</>} + {shortcut}
      </span>
    </span>
  );
};
