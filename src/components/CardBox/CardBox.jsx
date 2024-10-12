import React from "react";

export default function CardBox({ img, href }) {
  return (
    <div className="col-12 col-md-4 mt-3 d-flex justify-content-center">
      <div className="card text-white" style={{ backgroundColor: "000", width: '18rem' }}>
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <a href={href}>
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/111.webp" //{img}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
