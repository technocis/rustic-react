import React, { FunctionComponent } from "react";

export interface ErrorProps {
  message: string;
  error: Error;
}

export const ErrorDisplay: FunctionComponent<ErrorProps> = ({
  error,
  message,
}) => {
  return (
    <div className="error-bg p-4">
      <h1 className="text-2xl text-red-500 font-bold">{message}</h1>
      <pre>{error.message}</pre>
      {error.stack && (
        <pre className="bg-white rounded-lg text-xs p-4 w-96 overflow-x-scroll shadow-lg">
          {error.stack}
        </pre>
      )}
    </div>
  );
};
