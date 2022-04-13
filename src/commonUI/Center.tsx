import React from "react";

const Center: React.FC<{ className?: string }> = (props) => {
  return (
    <div
      className={`w-full flex justify-center mx-auto ${
        props.className && props.className
      }`}
    >
      {props.children}
    </div>
  );
};

export default Center;
