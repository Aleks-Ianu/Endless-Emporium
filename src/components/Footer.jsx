import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="relative w-full pt-8 pb-6 bg-blueGray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="mt-0 mb-2 text-lg text-blueGray-600">
              Find us on any of these platforms below, We would love to hear from you
            </h5>
            <div className="mt-6 mb-6 lg:mb-0">
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none hover:scale-150 hover:duration-300 hover:text-red-600"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none hover:scale-150 hover:duration-300 hover:text-red-600"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none hover:scale-150 hover:duration-300 hover:text-red-600"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none hover:scale-150 hover:duration-300 hover:text-red-600"
                type="button"
              >
                <i className="fab fa-instagram hover:"></i>
              </button>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top ">
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"

                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-blueGray-500">
              Copyright © <span id="get-current-year">2024</span>
              <a
                className="text-blueGray-500 hover:text-gray-800"
              />{" "}
              
              <a
              >
                Endless Emporium
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
