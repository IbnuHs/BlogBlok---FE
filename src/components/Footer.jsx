import React from "react";
import { CiLinkedin, CiFacebook, CiInstagram } from "react-icons/ci";
import { LuGithub, LuInstagram } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="mt-8 pb-8 lg:pb-5 xl:mt-10">
      <hr className="h-[1.5px] w-[95%] m-auto bg-[#868484] xl:w-[90%]" />
      <div className="mt-5 md:flex md:items-center justify-center gap-5 lg:justify-around lg:flex-grow">
        <div className="flex  items-center justify-center gap-5 md:justify-between">
          <div className="flex items-center gap-2 text-[20px] md:text-[14px] lg:text-[18px] xl:text-[24px]">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 rounded-full p-2 md:p-1 lg:p-2"
            >
              <TiSocialLinkedin className="" />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 rounded-full p-2 md:p-1 lg:p-2"
            >
              <LuGithub className="" />
            </a>

            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 rounded-full p-2 md:p-1 lg:p-2"
            >
              <LuInstagram className=" " />
            </a>
          </div>
          <div className="lg:hidden">
            <h1 className="text-[14px] md:text-[13px]">
              A Product of HasyimDev{" "}
            </h1>
          </div>
        </div>
        <div className="hidden lg:inline-block">
          <h1 className="text-[14px] md:text-[13px] xl:text-[14px]">
            A Product of HasyimDev{" "}
          </h1>
        </div>
        <p
          className="text-center mt-4 text-[14px] font-semibold md:text-[12px] md:mt-0 lg:text-[13px] xl:text-[14px]
        "
        >
          © 2024 BlogBlok by HasyimDev{" "}
        </p>
      </div>
    </div>
  );
}
