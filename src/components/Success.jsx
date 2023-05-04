import React from "react";
import spaceMan from "../assets/img/png/spaceMan.png";
import { Guides } from "../DataMap";

function Success() {
  return (
    <>
      <section style={{ background: "white" }} className=" py-xl-5 py-4 pb-5 ">
        <div className="container pt-md-5">
          <div className="row  align-items-center pt-lg-5 mt-4 ">
            <div
              className="col-lg-4"
              data-aos-anchor-placement="center-bottom"
              data-aos="fade-right"
              data-aos-easing="liner"
              data-aos-duration="3000">
              <div className="d-flex justify-content-center">
                <img
                  className=" w_65 {
                    width: 65%;
                  }"
                  src={spaceMan}
                  alt="spaceMan"
                />
              </div>
            </div>
            <div className="col-lg-8 my-lg-0 mt-4 mt-sm-5">
              <div className=" ps-md-4 mt-4 mt-md-0">
                <p className=" ff_gilroy fw_regular fs_sm text_Gray mb-0">
                  HAVE YOU SEEN OUR MASCOT?
                </p>
                <h2 className=" ff_Konexy fw_regular fs_4xxl text-black">
                  Success Guides{" "}
                </h2>
                <div className="d-flex flex-wrap justify-content-between justify-content-xsm-start">
                  <a
                    className=" success_btn ff_gilroy fw_semibold fs_sm rounded-5 border_transperent"
                    href="#">
                    Category-1
                  </a>
                  <a
                    className="px-sm-3 px-2 py-2 success_btn ff_gilroy fw_semibold fs_sm rounded-5 border_transperent"
                    href="#">
                    Category-2
                  </a>
                  <a
                    className=" success_btn ff_gilroy fw_semibold fs_sm rounded-5 border_transperent"
                    href="#">
                    Category-3
                  </a>
                  <a
                    className=" success_btn ff_gilroy fw_semibold fs_sm rounded-5 border_transperent"
                    href="#">
                    Category-4
                  </a>
                </div>
                <div className="row justify-content-center">
                  {Guides.map((value) => {
                    return (
                      <div
                        className="col-md-4 col-sm-6 mt-lg-0 mt-3"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        data-aos-anchor-placement="center-bottom">
                        <div className="p-lg-3 p-sm-2 p-3 success_box">
                          <img className=" w-100" src={value.img} alt="guids" />
                          <h5 className=" ff_gilroy fw_semibold fs_2xl text_lightBlack mt-2 pt-2 mb-2 mb-0">
                            {value.heading}
                          </h5>
                          <p className=" ff_gilroy fw_regular fs_sm mt-2 text_darkGray mb-0">
                            {value.lorem}
                          </p>
                          <a
                            className=" ff_gilroy fw_semibold fs_sm text_purpel mt-2 d-inline-block"
                            href="#">
                            {value.btn}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="Box_bottom_Success px-5 pt-4 pb-5 ">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <h2 className=" ff_Konexy fw_regular fs_4xxl text-white">
                  Have you
                </h2>
                <p className=" ff_gilroy fw_semibold fs_2xl text-white mb-0">
                  read our study about Speed and Performance in WordPress?
                </p>
              </div>
              <div className="col-md-3 d-flex justify-content-lg-end align-items-center h-100">
                <a
                  className=" px-lg-5 py-lg-3 px-3 py-2 bg-white fs_sm rounded-5 text_purpel ff_Inter fw_semibold  check_btn_hover mt-4 mt-md-0 d-inline-block"
                  href="#">
                  Check It Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Success;
