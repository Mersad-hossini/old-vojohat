import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer dir="rtl">
      <div className="footer">
        <div className="footer_row">
          <ul className="pe-0">
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/contact-us">ارتباط با ما</Link>
            </li>
            <li>
              <Link to="/vojohat-payment">پرداخت وجوهات</Link>
            </li>
            <li>
              <Link to="#"> لینک وبسایت های دیگر</Link>
            </li>
            <li>
              <Link to="#"> لینک وبسایت های دیگر</Link>
            </li>
          </ul>
        </div>

        <div className="footer_row">کلیه حقوق مادی و معنوی این سایت محفوظ هست - 1403 ©</div>
      </div>
    </footer>
  );
}
