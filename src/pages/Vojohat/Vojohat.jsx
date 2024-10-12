import React from "react";
import VojohatPayment from "../../components/VojohatPayment/VojohatPayment";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Vojohat() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-3 mb-3">
          <VojohatPayment />
        </div>
      </div>
      <Footer />
    </>
  );
}
