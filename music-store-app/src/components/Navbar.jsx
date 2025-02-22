import React from "react";

const Navbar = (props) => {
  return (
    <header className="flex items-center justify-between shadow-lg text-blue-500 font-semibold h-[60px] p-4">
      <div className="flex space-x-4">
        <a href="/" className="cursor-pointer">
          Home
        </a>
        <a href="/" className="cursor-pointer">
          {" "}
          Shop
        </a>
      </div>
      <div>
        <a className="cursor-pointer">Cart({props.count})</a>
      </div>
    </header>
  );
};

export default Navbar;
