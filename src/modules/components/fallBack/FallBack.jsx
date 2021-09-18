import React from "react";

const FallBack = ({ error, errorInfo }) => {
  return (
    <div>
      <div>Something Went Wrong...</div>
      {/* <details style={{ whiteSpace: "pre-wrap" }}>
        {error && error.toString()}
        <br />
        {errorInfo.componentStack}
      </details> */}
    </div>
  );
};

export default FallBack;
