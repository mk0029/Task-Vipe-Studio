import React from "react";
import VideiBtn from "../assets/img/png/Videobtn.png";
import GrupHeader from "../assets/img/webp/ImgHeadderGrup.webp";
import SearchIcon from "../assets/img/svg/SearchIcon.svg";
import Retry from "../assets/img/svg/Retry_logo.svg";
import Startgrup1 from "../assets/img/svg/Svg_Star.svg";
import Startgrup2 from "../assets/img/svg/Img_SvhStar2.svg";
function Header() {
  return (
    <>
      <section style={{ marginTop: "-1px" }} className="bg-black py-5   ">
        <div className=" container mt-xl-5 z_index">
          <div className="row justify-content-center">
            <div
              className="col-lg-6"
              data-aos="flip-left"
              data-aos-easing="ease-out"
              data-aos-duration="3000">
              <div className="mt-lg-5 mt-xl-0">
                <h1 className=" ff_Konexy fs_7xl fw-normal text-white  line_after_header position-relative ">
                  WordPress Development Agency
                </h1>
                <h3 className=" ff_gilroy fw-bold text-white fs_2xl my-3 my-lg-2 my-xxl-4">
                  for Enterprise + Friendly Team
                </h3>
                <p className=" ff_gilroy fw-normal text_lightGray fs_sm">
                  Vipe Studio is a WordPress Agency for development - a
                  long-term partner for any WordPress service. Websites
                  and,online shops development, maintenance and customization is
                  what we do best.
                </p>
                <div className="d-flex gap-2 gap-sm-4 my-4">
                  <span>
                    <a
                      href="#"
                      className=" btn_get bg_purpel ff_gilroy fs_xsm fw-semibold text-white ">
                      Get Started
                    </a>
                  </span>
                  <span>
                    <a
                      href="#"
                      className=" btn_video ff_gilroy fs_xsm fw-normal text_Gray">
                      <span className="d-flex align-items-center gap-2">
                        <img className="btnvid" src={VideiBtn} alt="btn" /> What
                        is Vipe? (1min)
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>{" "}
            <div
              className="col-lg-6"
              data-aos="flip-right"
              data-aos-easing="linear"
              data-aos-duration="3000">
              <div className="ms-xl-5 d-flex justify-content-center d-xxl-block my-md-4 mt-4 my-xxl-0 z_index2 position-relative  ">
                <div className=" Grident_layer z_index0"></div>
                <div className=" Grident_layer2 z_index0"></div>
                <div className="box_pos position-absolute d-flex flex-column justify-content-around ps-4">
                  <span>
                    <img className="Svg_Star" src={Startgrup1} alt="Grup" />
                  </span>
                  <span className="d-block">
                    <img className="Svg_Star2" src={Startgrup2} alt="Grup" />
                  </span>
                  <h6 className=" ff_gilroy fs_xsm fw-normal text-white">
                    Rated 5.0 Excellent
                  </h6>
                </div>
                <img className="image_header" src={GrupHeader} alt="Header" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg_tellUs py-5  position-relative "
        data-aos="zoom-out-up"
        data-aos-easing="ease-out "
        data-aos-duration="3000"
        style={{ zIndex: "12" }}>
        <div className=" container ">
          <div className=" pb-xl-0 pb-lg-4 pb-sm-3 pb-2 pt-md-4 pt-2">
            <div className="row justify-content-between">
              <div className="col-xl-6 col-lg-5 ">
                <h2 className="text-white ff_Konexy fs_3xxl fw-normal">
                  Tell us more....
                </h2>
                <p className="text-white ff_gilroy fs_sm fw-normal mb-0 mb-sm-2 ">
                  {" "}
                  Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                  augue in quis. Magna vel orci sem neque fringilla et lectus
                  laoreet.
                </p>
              </div>
              <div className="col-xl-5 col-lg-7  mt-4 mt-xl-0 ms-auto">
                <div className="">
                  <label htmlFor="Searc" className="w-100 position-relative">
                    <img
                      className="SearchIcon position-absolute"
                      src={SearchIcon}
                      alt=""
                    />
                    <input
                      className="w-100"
                      type="text"
                      placeholder="What do you need assistance with?"
                      id="Plasehoder"
                    />
                  </label>
                  <div className="d-flex align-items-center justify-content-between  flex-row pt-3">
                    <pre className="mb-0 ff_gilroy text-white fs_sm fw-normal overflow-hidden">
                      <a href="#plase">
                        <img className="hover_rotate" src={Retry} alt="retry" />
                      </a>{" "}
                      &nbsp;or &nbsp;
                      <a
                        className="ff_gilroy text-white fs_sm fw-normal hover_header_links position-relative "
                        href="#">
                        send us an inquire?
                      </a>
                    </pre>
                    <span className="ff_gilroy text-white fs_sm fw-normal ">
                      {" "}
                      <a
                        className="ff_gilroy text-white fs_sm fw-normal hover_header_links position-relative "
                        href="#">
                        Learn more about...
                      </a>
                    </span>
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

export default Header;
