import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <h1> Memory Lane </h1>
      <hr />
      <ul>
        <li>
          <Link to='/'> Dreams of Home Page </Link>
        </li>
        <li>
          <Link to=''> Align Spiritually </Link>
        </li>
        <li>
          <Link to='/sign-in'>Manage your Dream Account</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;