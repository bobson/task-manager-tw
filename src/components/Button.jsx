import classNames from "classnames";
import React from "react";

function Button({ children, small, secondary, destructive, ...rest }) {
  const classes = classNames(
    rest.className,
    "h-12 px-6 rounded-full bg-purple text-white hover:bg-light-purple",
    {
      "bg-[#efeff9] hover:bg-[#d8d7f0] text-purple h-10": secondary,
      "bg-red hover:bg-light-red h-10": destructive,
    }
  );
  return (
    <button className={classes}>
      {small || secondary || destructive ? (
        <h5>{children}</h5>
      ) : (
        <h3>{children}</h3>
      )}
    </button>
  );
}

export default Button;
