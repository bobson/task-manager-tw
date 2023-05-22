import classNames from "classnames";
import React from "react";

function Button({ children, small, primary, secondary, destructive, ...rest }) {
  const classes = classNames(
    rest.className,
    "p-3.5 rounded-full flex items-center",
    {
      "bg-purple hover:bg-light-purple text-white": primary,
      "bg-[#efeff9] hover:bg-[#d8d7f0] text-purple p-3": secondary,
      "bg-red hover:bg-light-red h-10": destructive,
      "p-3": small,
    }
  );
  return (
    <button {...rest} className={classes}>
      {small || secondary || destructive ? (
        <h5>{children}</h5>
      ) : (
        <h3>{children}</h3>
      )}
    </button>
  );
}

export default Button;
