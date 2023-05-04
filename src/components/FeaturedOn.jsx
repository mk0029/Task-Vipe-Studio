import React from "react";
import NwesYahoo from "../assets/img/png/Logo_Yahoo.png";
import Trandinglogo from "../assets/img/png/Tranding_topic_logo.png";
import FinensYahoo from "../assets/img/png/Logo_Yahoo_finenc.png";
import lifeYahoo from "../assets/img/png/Logo_life_yahoo.png";
function FeaturedOn() {
  return (
    <>
      <section
        className="bg_Featured logosanim py-xl-5 py-4  "
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <div className=" container">
          <div className="py-xxl-5 py-lg-4 py-sm-3 py-2">
            <h2 className=" ff_Konexy fw-normal fs_4xxl text-black mb-0">
              Featured on
            </h2>
            <div className="pt-xl-5 pt-lg-4 ">
              <div className="row justify-content-center">
                <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-4 ">
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img src={NwesYahoo} alt="logo" className="Yahoo_news" />
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-4 ">
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img src={FinensYahoo} alt="logo" className="FinensYahoo" />
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-4 ">
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img src={NwesYahoo} alt="logo" className="Yahoo_news" />
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-4 ">
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img
                      src={Trandinglogo}
                      alt="logo"
                      className="Trandinglogo"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-4 ">
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img src={lifeYahoo} alt="logo" className="Yahoo_news" />
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-4 ">
                  <div className=" d-flex align-items-center h-100 my-3 my-md-4 my-xxl-0">
                    <img
                      src={Trandinglogo}
                      alt="logo"
                      className="Trandinglogo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedOn;
