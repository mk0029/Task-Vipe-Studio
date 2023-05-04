import React from "react";
import agile from "../assets/img/png/agile_img.png";

function AgileWordpress() {
  return (
    <>
      <section
        style={{ marginTop: "-1px" }}
        className=" py-5 overflow-hidden bg-white">
        <div className="container py-md-5 my-lg-3">
          <div className="row flex-column-reverse flex-md-row align-items-center">
            <div
              className="col-md-6"
              data-aos="flip-left"
              data-aos-easing="ease-out"
              data-aos-duration="2000">
              <img
                className="Img_AlgileWordpress mt-3 mt-sm-4   mt-md-0"
                src={agile}
                alt="agile"
              />
            </div>
            <div
              className="col-md-6"
              data-aos="flip-right"
              data-aos-easing="ease-out"
              data-aos-duration="2000">
              <h2 className=" text-black ff_Konexy fs_4xxl fw-normal mb-0">
                <span className=" text_purpel fw-normal  fs_4xxl">
                  Agile WordPress
                </span>{" "}
                Development Project management
              </h2>
              <p className=" ff_gilroy fw-normal fs_sm text_darkGray mt-3 pb-2">
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
              </p>
              <a
                className=" px-4 py-2 bg_purpel text-white rounded-5 ff_gilroy fw_semibold fs_sm btn_hover border_transperent  d-inline-block mt-xl-3"
                href="#">
                <span
                  style={{ margin: "3px 0px 3px 0px" }}
                  className=" d-inline-block">
                  Explore
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AgileWordpress;
