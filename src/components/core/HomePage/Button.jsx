import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 ${
          active ? "bg-yellow-50 text-black " : "bg-richblack-800"
        } hover:shadow-lg hover:scale-95 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;

