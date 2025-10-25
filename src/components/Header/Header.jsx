import React from 'react'
import {Link,NavLink} from "react-router-dom";
import './Header.css';



function Header() {
  return (
    <header>
       <nav>
        <div id="logo">
          <Link to="/">ShikharPandey</Link>
        </div>
        <div id="content">
          <ul>
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/tasks">Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/members">Members</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header