import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <nav>
        <div id="logo">
          <Link to="/">ShikharPandey</Link>
        </div>

        <div id="content">
          <ul>
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/tasks">Tasks</NavLink></li>
            <li><NavLink to="/members">Members</NavLink></li>

            {/* Settings Dropdown */}
            <li className="dropdown" ref={dropdownRef}>
              <button className="dropdown-btn" onClick={toggleDropdown}>
                Settings
              </button>

              {showDropdown && (
                <div className="dropdown-menu">
                  <button className="theme-btn">Change Theme</button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
