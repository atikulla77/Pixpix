import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navber from "../components/Navber/Navber";
import NavberBottom from "../components/Navber/NavberBottom";

export default function SignUp() {
  const [clickEye, setclickEye] = useState(true);
  const [clickEye2, setclickEye2] = useState(true);
  return (
    <div className="w-full">
      <Navber />
      <NavberBottom/>
    <main
      className={`w-[100%] h-[100vh] flex flex-col justify-center items-center relative pt-[4rem] screen3:mb-0 mb-[5rem] GeologicaFont`}
    >
      <div className="container mx-auto flex flex-col justify-center ">
        <div className="w-full flex justify-center relative mx-auto">
          <div className="relative screen16:w-[400px] w-[95%] screen16:min-h-[445px] screen11:min-h-[445px] min-h-[445px] rounded-[10px] flex justify-center items-center shadow-[0px_0px_6px_0px_#c6c6c6]">
            <div className="relative w-full screen16:p-[40px] screen11:p-[25px] p-[10px]">
              <h2 className="relative text-black text-[24px] tracking-[1px] text-center pb-[20px]">
                Sign Up
              </h2>
              <form>
                <div className="mb-[12px] text-left">
                  <label className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#FBB03B] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#FBB03B] dark:focus:border-[#FBB03B] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      First Name
                    </span>
                  </label>
                </div>
                <div className="mb-[12px] text-left">
                  <label className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#FBB03B] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#FBB03B] dark:focus:border-[#FBB03B] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Last Name
                    </span>
                  </label>
                </div>
                <div className="mb-[12px] text-left">
                  <label className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#FBB03B] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#FBB03B] dark:focus:border-[#FBB03B] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Email address
                    </span>
                  </label>
                </div>
                <div className="mb-[12px] text-left">
                  <label className="relative">
                    <input
                      type={clickEye ? "password" : "text"}
                      id="password"
                      name="password"
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#FBB03B] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#FBB03B] dark:focus:border-[#FBB03B] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Password
                    </span>
                    <FaEyeSlash
                      onClick={() => setclickEye(true)}
                      className={`text-[16px] text-[#00000087] absolute right-[8px] top-[14px] cursor-pointer ${
                        clickEye ? "hidden" : ""
                      }`}
                    />
                    <FaEye
                      onClick={() => setclickEye(false)}
                      className={`text-[16px] text-[#00000087] absolute right-[8px] top-[14px] cursor-pointer ${
                        clickEye ? "" : "hidden"
                      }`}
                    />
                  </label>
                </div>
                <div className="mb-[12px] text-left">
                  <label className="relative">
                    <input
                      type={clickEye2 ? "password" : "text"}
                      id="confirmpassword"
                      name="confirmpassword"
                      autoComplete="off"
                      required
                      placeholder=""
                      className="inputStyleIng  border-[2px] border-[#00000087] text-black text-sm rounded-lg focus:ring-[#FBB03B] focus:border-[#00000087] block w-full p-2.5 dark:!bg-transparent dark:border-[#00000087] placeholder-[#pffffff9c] dark:focus:ring-[#FBB03B] dark:focus:border-[#FBB03B] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText text-sm text-black text-opacity-80 bg-[#fff] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text">
                      Confirm Password
                    </span>
                    <FaEyeSlash
                      onClick={() => setclickEye2(true)}
                      className={`text-[16px] text-[#00000087] absolute right-[8px] top-[14px] cursor-pointer ${
                        clickEye2 ? "hidden" : ""
                      }`}
                    />
                    <FaEye
                      onClick={() => setclickEye2(false)}
                      className={`text-[16px] text-[#00000087] absolute right-[8px] top-[14px] cursor-pointer ${
                        clickEye2 ? "" : "hidden"
                      }`}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  value="Submit Now"
                  className="text-[14px] w-full py-[8px] rounded-[50px] hover:!bg-transparent bg-[#FBB03B] text-[#fff] hover:text-[#FBB03B] border-[2px] border-[#FBB03B] transition-[0.4s]"
                >
                  Sign Up
                </button>

                <p className="mt-[10px] text-black text-[14px]">
                  AllReady Have An Account?{" "}
                  <Link to={"/login"}>
                    <span className="text-[#FBB03B] pl-[5px] cursor-pointer">
                      LogIn
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
