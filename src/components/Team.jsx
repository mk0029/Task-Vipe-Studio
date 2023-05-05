import React from "react";
import team from "../assets/img/png/team_img.png";

function Team() {
  return (
    <>
      <section
        style={{ marginTop: "-1px" }}
        className=" py-md-0 py-5 pt-md-4 bg_light_gray">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6 "
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="liner"
              data-aos-duration="1000">
              <h2 className=" ff_Konexy fw-normal fs_4xxl mb-0">
                Team Full of Stars{" "}
              </h2>
              <p
                style={{ maxWidth: "476px" }}
                className=" ff_gilroy fw-normal fs_sm mt-3 mb-3 ">
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
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="liner"
              data-aos-duration="2000"
              className="col-md-6">
              <div className="Ttansform_img_team mt-md-0 mt-4">
                <img className=" w-100" src={team} alt="team" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
