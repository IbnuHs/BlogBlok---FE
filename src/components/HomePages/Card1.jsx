import React from "react";
import cardImg from "../../assets/Card1.png";
import avatar from "../../assets/Avatar.png";

export default function Card1(props) {
  return (
    <div className="max-w-[380px] shadow-md flex justify-center flex-col border px-4 pb-8 pt-6 gap-6">
      <img src={cardImg} alt="Thumbnail" loading="lazy" />
      <div className="flex flex-col gap-12">
        <div className="">
          <h1 className="text-[24px] font-semibold lg:text-[19px] xl:text-[22px]">
            UX Review Presentation
          </h1>
          <p className="text-[#667085] mt-4 line-clamp-3 lg:text-[14px] xl:text-[15px]">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>
        <div className="flex gap-2 items-center ">
          <img
            src={avatar}
            alt="avatar"
            className="max-w-10 lg:max-w-8 xl:max-w-10"
          />
          <div className="text-[14px] lg:text-[12px] xl:text-[14px]">
            <h1 className="font-semibold ">Olivia Rhye</h1>
            <p className="text-[#667085]">20 Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
