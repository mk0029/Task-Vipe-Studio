import React from "react";
import { integer } from "../DataMap";
function Integer() {
  return (
    <>
      <section className=" py-5  bg-white">
        <div className="container">
          <div className=" py-lg-5 mb-md-3">
            {" "}
            <h2
              className=" ff_Konexy fw_regular fs_4xxl text-black mb-0"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500">
              Integer et nisl non
            </h2>
            <div className="row pt-xl-5 pt-md-4 pt-3  justify-content-center">
              {integer.map((data) => {
                return (
                  <div
                    className="col-md-4 col-sm-6 mt-md-3 mt-3 mt-md-2 mt-lg-4 "
                    data-aos="flip-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div className="pt-lg-5 px-lg-5 px-sm-3 px-2 text-center integer_box pb-4 mb-lg-3 h-100">
                      <img className=" mt-4" src={data.img} alt="integer1" />
                      <h6 className=" ff_Inter fw_semibold fs_2xl text_lightBlack mt-lg-5 mt-3 mb-0">
                        {data.heading}
                      </h6>
                      <p className=" mt-3 ff_gilroy fw_regular fs_sm text_darkGray mb-lg-3 mb-2">
                        {data.lorem}
                      </p>
                      <a
                        className=" text_purpel ff_gilroy fw_semibold fs_sm"
                        href="#">
                        {data.link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Integer;
