import React, { useState } from "react";
import Logo from "../assets/img/svg/Logo.svg";
import glob from "../assets/img/svg/glob.svg";
import Dropdown from "react-bootstrap/Dropdown";

function NavBar() {
  const [navShow, setNavShow] = useState(false);
  // const [dataShow, setNavShow] = useState(true);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  // if (dataShow) {
  //   document.body.style.overflow = "initial";
  // } else {
  //   document.body.style.overflow = " hidden";
  // }

  return (
    <>
      <section className=" bg-black navBar ">
        {/* <div
          style={{
            zIndex: "9999999999999999999999",
          }}
          className={
            dataShow
              ? "position-absolute z_index-1"
              : " position-fixed h-100 w-100 bg_Overlay_onclick p-lg-5 p-md-4 p3 "
          }>
          {" "}
          <button
            className=" bg-danger ff_gilroy fs_md fw-semibold text-white "
            onClick={() => setNavShow(!navShow)}>
            Close
          </button>{" "}
          <p className=" ff_gilroy fs_md fw-semibold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            deleniti sapiente repellat unde, libero corrupti amet dolorem eos
            neque quidem aliquam molestias aliquid repudiandae aspernatur odit
            dolorum quos culpa voluptatum beatae laboriosam, voluptates
            laudantium sint quia doloribus. Fugit in dicta et aperiam
            consequatur omnis recusandae nesciunt autem voluptates perferendis.
            Iusto?
          </p>
        </div> */}
        <div
          className="  m-0 m-sm-auto"
          data-aos="fade-down"
          data-aos-offset="500"
          data-aos-easing="linear"
          data-aos-duration="3000">
          <nav className="pt-3 nav_bg">
            <div className=" container px-2 px-sm-0 ">
              <div className=" d-flex justify-content-between align-items-center w-100 ">
                <li className="d-xl-none  ">
                  <a className="text-white ff_gilroy fs_sm w-75" href="#">
                    <img className="w-75" src={Logo} alt="/" />
                  </a>
                </li>
                <ul className="d-flex gap-xxl-3 gap-2  py-3  d-none d-lg-flex align-items-center mb-0 justify-content-end ps-0 ">
                  <li className="pe-xxl-5 pe-xl-3">
                    <a
                      className="text-white ff_gilroy fs_sm d-none d-xl-flex"
                      href="#">
                      <img className="navlogo" src={Logo} alt="/" />
                    </a>
                  </li>
                  <li className="">
                    <Dropdown className="text-white ff_gilroy fs_sm ">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="dropdoentoggle ">
                        <span className="Ancor_Comunicate">
                          {" "}
                          WordPress Solution
                        </span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="#/action-1"
                          // onClick={() => setNavShow(!navShow)}
                          className="">
                          WordPress Solution 1
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          // onClick={() => setNavShow(!navShow)}
                        >
                          WordPress Solution 2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <Dropdown className="text-white ff_gilroy fs_sm ">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="">
                        <span className="Ancor_Comunicate">
                          Services Services
                        </span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="#/action-1"
                          // onClick={() => setNavShow(!navShow)}
                          className="">
                          <span></span>1
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          // onClick={() => setNavShow(!navShow)}
                        >
                          Services 2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <a
                      className="text-white ff_gilroy fs_sm Ancor_Comunicate"
                      href="#">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <Dropdown className="text-white ff_gilroy fs_sm ">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="">
                        <span className="Ancor_Comunicate">About</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="#/action-1"
                          // onClick={() => setNavShow(!navShow)}
                          className="">
                          Services1
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          // onClick={() => setNavShow(!navShow)}
                        >
                          Services 2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="">
                    <a
                      className="text-white ff_gilroy fs_sm Ancor_Comunicate "
                      href="#">
                      Blog
                    </a>
                  </li>
                </ul>
                <ul className="d-flex gap-xxl-3 gap-2   py-3  d-none d-xl-flex align-items-center mb-0 justify-content-end">
                  <li className="">
                    <a
                      className="text-white ff_gilroy fs_sm Ancor_Comunicate"
                      href="#">
                      1 888 266-6917 (eu?)
                    </a>
                  </li>

                  <span className=" text-white ff_gilroy fs_md bg_purpel cursor_pointer  btn_nav d-inline-block ms-2  position-relative  AfterLinebtn">
                    Contact Us
                  </span>

                  <li onClick={() => setNavShow(!navShow)} className="">
                    <Dropdown className="text-white ff_gilroy me-2 ">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="fs_md ">
                        <img className="me-1 w_glob" src={glob} alt="glob" />
                        <span className=" ff_gilroy fs_sm fw-normal Ancor_Comunicate">
                          {" "}
                          Eng
                        </span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="#/action-1"
                          // onClick={() => setNavShow(!navShow)}
                          className="">
                          Services1
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          // onClick={() => setNavShow(!navShow)}
                        >
                          Services 2
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
                <div
                  onClick={() => setNavShow(!navShow)}
                  className={
                    navShow
                      ? "HamburgerActive d-xl-none "
                      : "Hamburger d-xl-none "
                  }>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="d-xl-none d-flex justify-content-between ">
                <div className={` ${navShow ? "nav-fix " : "fix-navbar"}`}>
                  <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center list-unstyled gap-3 gap-md-4 pt-3 transition">
                    <div className="d-flex flex-column gap-3 gap-md-4 d-lg-none align-items-center">
                      <li>
                        <Dropdown className="text-white ff_gilroy fs_sm ">
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic">
                            WordPress Solution
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item
                              href="#/action-1"
                              onClick={() => setNavShow(!navShow)}
                              className="">
                              {" "}
                              WordPress Solution 1
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              onClick={() => setNavShow(!navShow)}>
                              WordPress Solution 2
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li>
                        <Dropdown className="text-white ff_gilroy fs_sm ">
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic">
                            Services
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item
                              href="#/action-1"
                              onClick={() => setNavShow(!navShow)}
                              className="">
                              Services1
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              onClick={() => setNavShow(!navShow)}>
                              Services 2
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li>
                        <a className="text-white ff_gilroy fs_sm" href="#">
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <Dropdown className="text-white ff_gilroy fs_sm ">
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic">
                            Services
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item
                              href="#/action-1"
                              onClick={() => setNavShow(!navShow)}
                              className="">
                              Services1
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              onClick={() => setNavShow(!navShow)}>
                              Services 2
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    </div>
                    <li>
                      <a className="text-white ff_gilroy fs_sm" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="">
                      <a className="text-white ff_gilroy fs_sm" href="#">
                        1 888 266-6917 (eu?)
                      </a>
                    </li>
                    <span className="Ancor_Comunicate text-white ff_gilroy fs_sm bg_purpel  btn_nav d-inline-block ">
                      <a href="#"> Contact Us</a>
                    </span>
                    <li>
                      <Dropdown className="text-white ff_gilroy fs_sm ">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <img src={glob} alt="glob" /> Eng
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="#/action-1"
                            onClick={() => setNavShow(!navShow)}
                            className="">
                            Services1
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#/action-2"
                            onClick={() => setNavShow(!navShow)}>
                            Services 2
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default NavBar;
