import React from "react";
import "./VojohatTitle.css";

export default function VojohatTitle({ title }) {
  return (
    <div className="title-with-icon">
      <span className="text">{title}</span>
    </div>
  );
}
