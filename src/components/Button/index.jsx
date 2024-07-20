import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, variant, link, ...rest }) => {
  // if (!link) {
  //   return (
  //     <button {...rest} className={`btn ${variant}`}>
  //       {children}
  //     </button>
  //   );
  // }

  return (
    <Link to={link} {...rest} className={`btn ${variant}`}>
      {children}
    </Link>
  );
};

export default Button;
