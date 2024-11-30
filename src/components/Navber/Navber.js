import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrLocation } from "react-icons/gr";

import { BiScan } from "react-icons/bi";

import logo from "../../assist/logo.png";
import { Link } from "react-router-dom";

function Navber() {
  const [mainLanguage, setmainLanguage] = useState(true);
  const [isOpenlanguageMenuBar, setisOpenlanguageMenuBar] = useState(true);
  const [languageActionButton, setlanguageActionButton] = useState(true);

  if (isOpenlanguageMenuBar === true) {
    setTimeout(() => {
      setisOpenlanguageMenuBar(isOpenlanguageMenuBar);
    }, 7000);
  }

  let data = "EN";
  if (mainLanguage === true) {
    data = "EN";
  } else {
    data = "BN";
  }

  function setlanguage(a) {
    if (a === "EN / English") {
      setmainLanguage(true);
      setlanguageActionButton(true);
    } else {
      setmainLanguage(false);
      setlanguageActionButton(false);
    }
    setisOpenlanguageMenuBar(!false);
  }

  let language = {
    "EN / English": !languageActionButton,
    "BN / Bangla": languageActionButton,
  };

  //      ``````````````````
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 24) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={` w-full flex fixed top-[0px] z-50`}>
      <nav
        className={`screen3:bg-[#FBB03B] text-black w-full relative ${
          color ? "bg-white" : "bg-transparent"
        }`}
        style={{ transition: ".3s ease-in" }}
      >
        <div className="mx-auto px-2 sm:px-6 lg:px-8 xl:w-[1188px] w-[100%]">
          <div className="items-center h-16 flex justify-between w-full">
            <div
              className="flex screen3:hidden screen15:w-[48px] w-[37px] justify-center items-center px-[5px] cursor-pointer transition-all !duration-[0.3s] bg-transparent rounded-[7px] screen15:mr-[15px] mr-[7px]"
              // style={{ boxShadow: "#6767679c 0px 1px 7px -2px" }}
            >
              <BiScan className="text-[29px]" />
            </div>

            <div className="flex items-center justify-between w-[100%]">
              <Link to={"/"}>
                <img
                  className="w-[95px] hidden screen3:flex cursor-pointer pr-[10px]"
                  src={logo}
                  alt=""
                />
              </Link>

              <div
                className="relative rounded-md mx-auto flex items-center w-[100%]  screen3:shadow-none"
                style={{ boxShadow: "0 0 2px 0 #00000040" }}
              >
                <div className="absolute items-center right-[1px] flex pl-3">
                  <button className="inline-block rounded-md border border-transparent bg-[#fbb03b59] screen15:px-[6px] px-[4px] screen3:py-[4px] screen15:py-[2px] py-[4px] text-center font-medium text-[#FBB03B] screen15:text-[22px] text-[19px] screen15:mr-[3px] mr-[2px]">
                    <AiOutlineSearch />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search in pixpix"
                  className={`block w-full rounded-md screen3:py-[7px] screen15:py-[5px] py-[6px] screen15:pl-[16px] pl-[10px] screen15:pr-[3rem] pr-[2.4rem] text-gray-900 bg-white placeholder:text-gray-400 outline-none screen15:text-[16px] text-[14px]`}
                />
              </div>
            </div>

            <div className="screen3:flex hidden items-center lg:w-[48%] w-[83%] justify-center text-white">
              <button className="flex mr-[10px] transition-all !duration-[0.3s] items-center hover:bg-[#ffebcc59] rounded-[7px] px-[10px] py-[6px]">
                <BiUser className="text-[25px] pr-[5px]" />
                <span className="text-[14px] font-[700]">Login</span>
              </button>
              <span className="cursor-none">|</span>
              <button className="flex transition-all !duration-[0.3s] ml-[10px] items-center hover:bg-[#ffebcc59] rounded-[7px] px-[10px] py-[6px]">
                <span className="text-[14px] font-[700] w-[52px]">Sign Up</span>
              </button>
              <div className="relative ml-[10px]">
                <div
                  className={` flex items-center rounded-[7px] px-[10px] py-[6px] transition-all !duration-[0.3s] cursor-pointer ${
                    isOpenlanguageMenuBar
                      ? "hover:bg-[#ffebcc59]"
                      : "bg-[#ffebcc59]"
                  }`}
                  onClick={() =>
                    setisOpenlanguageMenuBar(!isOpenlanguageMenuBar)
                  }
                >
                  <TbWorld className="text-[25px] pr-[5px] " />
                  <span className="languageTittle">
                    {mainLanguage ? "EN" : "BN"}
                  </span>
                  <IoIosArrowDown className="ml-[9px]" />
                </div>

                <div
                  className={
                    isOpenlanguageMenuBar
                      ? "hidden"
                      : "block bg-[#ffffff] w-[11rem] absolute pb-[13px] left-[-70px] top-[51px] rounded-[5px]"
                  }
                  style={{ boxShadow: "0 0 2px 0 #00000040" }}
                  id="mobile-menu-language"
                >
                  <div className="px-2 space-y-1 text-left">
                    <a
                      href=""
                      className="text-black block px-3 pb-[5px] pt-[15px] text-[13px] font-medium cursor-default"
                    >
                      Select Language
                    </a>
                  </div>

                  {Object.keys(language).map((key) => {
                    return (
                      <div
                        className="relative flex mt-[10px] items-center px-2 pl-[15px] text-left"
                        key={key}
                        onClick={() => setlanguage(key)}
                      >
                        <MdOutlineRadioButtonChecked
                          className={`w-[18px] h-[18px] absolute text-[#FBB03B] left-[20px] ${
                            language[key] ? "hidden" : ""
                          } top-[3px]`}
                        />
                        <a
                          href=""
                          className={` px-3 py-[2px] ml-[20px] text-[13px] font-medium ${
                            language[key] ? "text-black" : "text-[#FBB03B]"
                          }`}
                        >
                          {key}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex ml-[8px] cursor-pointer justify-center items-center hover:bg-[#ffebcc59] rounded-[7px] px-[10px] transition-all !duration-[0.3s] py-[6px]">
                <FiShoppingCart className="text-[21px]" />
              </div>
            </div>
            <div
              className="flex screen3:hidden screen15:w-[48px] w-[37px] justify-center items-center px-[5px] cursor-pointer transition-all !duration-[0.3s]  bg-transparent rounded-[7px] screen15:ml-[15px] ml-[10px]"
              // style={{ boxShadow: "#6767679c 0px 1px 7px -2px" }}
            >
              <GrLocation className="text-[29px]" />
            </div>
            <div
              className="flex screen3:hidden screen15:w-[48px] w-[37px] justify-center items-center px-[5px] cursor-pointer transition-all !duration-[0.3s] bg-transparent  rounded-[7px] screen15:ml-[7px] ml-[5px]"
              // style={{ boxShadow: "#6767679c 0px 1px 7px -2px" }}
            >
              <IoMdNotificationsOutline className="text-[29px]" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
