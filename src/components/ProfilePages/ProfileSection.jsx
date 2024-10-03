import React from "react";
import profile from "../../assets/Me .jpg";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";

export default function ProfileSection() {
  return (
    <div className="px-9 lg:w-[45%] lg:px-2 xl:w-[50%] xl:px-10">
      <div className="m-auto relative flex justify-center">
        <img
          src={profile}
          alt=""
          loading="lazy"
          className="max-w-32 aspect-square rounded-full border-4 border-black absolute -top-16"
        />
      </div>
      <div className="mt-20 text-center">
        <h1 className="font-semibold text-[18px] xl:text-[20px]">
          Ibnu Hasyim Surianto
        </h1>
        <div className=" text-[#6E6D6D] text-[14px] mt-3 xl:text-[16px]">
          <h1 className="">Web Developer Enthusiast</h1>
          <p>ibnuhs30@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-5 text-center border-b-[3px] border-[#BABABA] max-w-[80%] m-auto pb-3 text-[14px]">
        <div className="">
          <h1 className="font-semibold">Articles</h1>
          <p className="text-[#868484] font-semibold">10</p>
        </div>
        <div className="">
          <h1 className="font-semibold">Likes</h1>
          <p className="text-[#868484] font-semibold">999</p>
        </div>
      </div>
      <div className="text-center mt-5 text-[14px] md:px-7 xl:text-[16px]">
        <p>
          Hello, I’m a Web Developer Enthusiast with a strong passion for
          creating engaging digital experiences. I love exploring new
          technologies and continuously learning to enhance my abilities in web
          development. My journey is driven by curiosity and a desire to
          contribute meaningful solutions through innovative projects.
        </p>
      </div>

      <div className="flex m-auto border-b-[2px] border-[#C4C4C4] justify-center mt-6 gap-4 pb-2 max-w-[40%]">
        <a href="" target="_blank">
          <FaInstagram className="text-[28px] xl:text-[32px]" />
        </a>
        <a href="" target="_blank">
          <RiTwitterLine className="text-[28px] xl:text-[32px]" />
        </a>
        <a href="" target="_blank">
          <AiOutlineFacebook className="text-[28px] xl:text-[32px]" />
        </a>
      </div>
    </div>
  );
}
