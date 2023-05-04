import React from "react";
import propy from "../assets/img/png/propy.png";
import ciela from "../assets/img/png/ciela.png";
import revulve from "../assets/img/png/revelue.png";
import spark from "../assets/img/png/spark.png";

function LongTerm() {
  return (
    <>
      <section
        className=" py-5 logosanim bg_light_gray z_index1 position-relative "
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <div className="container pt-xl-3 pb-lg-4">
          <div className="row">
            <div className="col-md-6">
              <h2 className=" ff_Konexy fw-normal fs_4xxl text-black">
                Long Term WordPress Partner
              </h2>
              <p className=" ff_gilroy fw-normal fs_sm text_dark_black mb-0 pt-xl-3 mt-1">
                Our motto is the long-term partnership – we will not only
                develop your perfect website, but will be behind you through the
                whole process. They already trusted us:
              </p>
            </div>
          </div>
          <div className=" pt-md-3 mt-3 ">
            <div className="row justify-content-center align-items-center mt-2  overflow-hidden">
              <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-md-4 ">
                <img
                  className=" img_Propy mt-4 mt-md-0  pe-md-4"
                  src={propy}
                  alt="propy"
                />
              </div>
              <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-md-4">
                <img
                  className=" img_Cicla mt-4 mt-md-0  px-md-4"
                  src={ciela}
                  alt="ciela"
                />
              </div>
              <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-4">
                <img
                  className="img_Revenue mt-4 mt-md-0  px-md-4"
                  src={revulve}
                  alt="revulve"
                />
              </div>
              <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-4">
                <img
                  className="img_Cicla mt-4 mt-md-0  px-md-4"
                  src={ciela}
                  alt="ciela"
                />
              </div>
              <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-4">
                <img
                  className="img_Spark mt-4 mt-md-0  px-md-4"
                  src={spark}
                  alt="spark"
                />
              </div>
              <div className="col-lg-2 col-sm-4 col-5 mt-xl-0 mt-4">
                <img
                  className="img_Cicla mt-4 mt-md-0  ps-md-4"
                  src={ciela}
                  alt="ciela"
                />
              </div>
            </div>
            {/* <div class="LogoParant ">
              <div className="slide_logo  d-flex justify-content-between mt-2  overflow-hidden">
                <img
                  className=" img_Propy mt-4 mt-md-0  pe-md-4"
                  src={propy}
                  alt="propy"
                />

                <img
                  className=" img_Cicla mt-4 mt-md-0  px-md-4"
                  src={ciela}
                  alt="ciela"
                />

                <img
                  className="img_Revenue mt-4 mt-md-0  px-md-4"
                  src={revulve}
                  alt="revulve"
                />

                <img
                  className="img_Cicla mt-4 mt-md-0  px-md-4"
                  src={ciela}
                  alt="ciela"
                />

                <img
                  className="img_Spark mt-4 mt-md-0  px-md-4"
                  src={spark}
                  alt="spark"
                />

                <img
                  className="img_Cicla mt-4 mt-md-0  ps-md-4"
                  src={ciela}
                  alt="ciela"
                />
              </div>

              <div className=" d-flex justify-content-between mt-2 slide_logo  overflow-hidden">
                <img
                  className=" img_Propy mt-4 mt-md-0  pe-md-4"
                  src={propy}
                  alt="propy"
                />

                <img
                  className=" img_Cicla mt-4 mt-md-0  px-md-4"
                  src={ciela}
                  alt="ciela"
                />

                <img
                  className="img_Revenue mt-4 mt-md-0  px-md-4"
                  src={revulve}
                  alt="revulve"
                />

                <img
                  className=" img_Cicla mt-4 mt-md-0  px-md-4"
                  src={ciela}
                  alt="ciela"
                />

                <img
                  className="img_Spark mt-4 mt-md-0  px-md-4"
                  src={spark}
                  alt="spark"
                />

                <img
                  className=" img_Cicla mt-4 mt-md-0  ps-md-4"
                  src={ciela}
                  alt="ciela"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default LongTerm;
