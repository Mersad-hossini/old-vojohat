import React from "react";
import "./Home.css";

import Header from "../../components/Header/Header";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AccordionDetails from "../../components/AccordionDetails/AccordionDetails";
// import CardBox from "../../components/CardBox/CardBox";
import VojohatPayment from "../../components/VojohatPayment/VojohatPayment";
import Footer from "../../components/Footer/Footer";

import otherWebLink from "../../assets/images/otherwebsite.png";
import otherWebLink2 from "../../assets/images/otherwebsite2.png";
// import sliderBg1 from "../../assets/images/siteslide1.jpg";
// import sliderBg2 from "../../assets/images/siteslide2.jpg";
// import sliderBg3 from "../../assets/images/siteslide3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import { Accordion } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Header />

      {/* ----------------------- Swiper Slider Start ----------------------- */}
      {/* <div className="container mt-3 mb-3">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          dir="rtl"
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={sliderBg1} className="w-100 slider_img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderBg2} className="w-100 slider_img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderBg3} className="w-100 slider_img" />
          </SwiperSlide>
        </Swiper>
      </div> */}
      {/* ----------------------- Swiper Slider End ----------------------- */}
      <SectionTitle ttile="پرداخت وجوهات" />
      <VojohatPayment />
      {/* ----------------------- Accordion Start  ----------------------- */}
      {/* <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <Accordion className="mb-5">
              <AccordionDetails
                headTitle="شماره حساب های دفتر"
                textBody="متن راهنما در این قسمت قرار میگیرد"
                lenght="0"
              />
              <AccordionDetails
                headTitle="وجوهات ما در چه راهی مصرف میشود؟"
                textBody="متن راهنما در این قسمت قرار میگیرد"
                lenght="1"
              />
              <AccordionDetails
                headTitle="دانلود نرم افزار وجوهات شرعیه"
                textBody="متن راهنما در این قسمت قرار میگیرد"
                lenght="2"
              />
            </Accordion>
          </div>
        </div>
      </div> */}
      {/* ----------------------- Accordion End  ----------------------- */}
      {/* ----------------------- Other Wbsite card Start  ----------------------- */}
      <SectionTitle ttile="وبسایت ها" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-3">
            <a className="website_links" href="#">
              <img src={otherWebLink} alt="" />
            </a>
          </div>
          <div className="col-3">
            <a className="website_links" href="#">
              <img src={otherWebLink2} alt="" />
            </a>
          </div>
          <div className="col-3">
            <a className="website_links" href="#">
              <img src={otherWebLink} alt="" />
            </a>
          </div>
          <div className="col-3">
            <a className="website_links" href="#">
              <img src={otherWebLink2} alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* ----------------------- Other Wbsite card End  ----------------------- */}
      {/* <Footer /> */}
    </>
  );
}
