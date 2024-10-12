import React from "react";
import "./SectionTitle.css";

export default function SectionTitle({ ttile }) {
  return (
    <div className="card-divider">
      <div className="line"></div>
      <div className="card">{ttile}</div>
      <div className="line"></div>
    </div>
  );
}
