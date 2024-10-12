import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  let [isSidebarOpen, setisSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setisSidebarOpen(false);
  };

  return (
    <header>
      {/* Top Bar Image */}
      <div className="top_bar"></div>
      {/* <nav className="d-flex align-items-center justify-content-between pt-3 pb-3 position-sticky">
        <ul className="d-none d-md-flex">
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/vojohat-payment">پرداخت وجوهات</Link>
          </li>
          <li>
            <Link to="/contact-us">ارتباط با ما</Link>
          </li>
        </ul>
        <div className="d-flex d-md-none me-3">
          <div className="bars_icon_wrapper" onClick={toggleSidebar}>
            <i className="fa fa-bars"></i>
          </div>

          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <i className="fa fa-close close_btn" onClick={closeSidebar}></i>
            <ul>
              <li>
                <Link to="/">خانه</Link>
              </li>
              <li>
                <Link to="/vojohat-payment">پرداخت وجوهات</Link>
              </li>
              <li>
                <Link to="/contact-us">ارتباط با ما</Link>
              </li>
            </ul>
          </div>

          {isSidebarOpen && (
            <div className="overlay" onClick={toggleSidebar}></div>
          )}
        </div>

        <div className="left_nav">
          <a href="#" className="ms-3 enter_panel">
            هادی محمدی
          </a>
        </div>
      </nav> */}
    </header>
  );
}
