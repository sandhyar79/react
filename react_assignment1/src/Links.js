import React from 'react';
import { Link } from 'react-router-dom';
export default function Links() {
  return (
    <nav className="navbar navbar-default">
      <div className="links">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          &nbsp;&nbsp;
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
