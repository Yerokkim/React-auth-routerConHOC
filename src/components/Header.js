import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">Redux auth</Link>
      <Link to="/signup">signup</Link>
      <Link to="/signin">signin</Link>
      <Link to="/signout">signout</Link>
      <Link to="/feature">feature</Link>
    </div>
  );
};

export default Header;
