import React from "react";

export default function CategoryGroupButton() {
  return (
    <div
      className="px-5 py-4 md:px-12 lg:px-24 md:mt-5 lg:mt-7 xl:max-w-[80%] m-auto
    "
    >
      <h1 className="font-semibold text-[20px] md:text-[16px] md:text-center lg:text-[18px] xl:text-[24px]">
        Category
      </h1>
      <div className="flex overflow-scroll gap-2 no-scrollbar mt-4 items-center md:gap-3 md:justify-center md:text-[12px] lg:justify-center lg:text-[15px] lg:mt-8 xl:text-[20px] xl:gap-6">
        <a
          href=""
          className="border-2 border-[#B4B4B4] inline-block px-5 py-[2px] rounded-full xl:px-7 hover:text-white hover:bg-[#B4B4B4] hover:border-white transition-all"
        >
          <h1>Fashion</h1>
        </a>
        <a
          href=""
          className="border-2 border-[#B4B4B4] inline-block px-5 py-[2px] rounded-full xl:px-7 hover:text-white hover:bg-[#B4B4B4] hover:border-white transition-all"
        >
          <h1>Sport</h1>
        </a>
        <a
          href=""
          className="border-2 border-[#B4B4B4] inline-block px-5 py-[2px] rounded-full xl:px-7 hover:text-white hover:bg-[#B4B4B4] hover:border-white transition-all min-w-[118px] text-center"
        >
          <h1 className="">Life-Style</h1>
        </a>
        <a
          href=""
          className="border-2 border-[#B4B4B4] inline-block px-5 py-[2px] rounded-full xl:px-7 hover:text-white hover:bg-[#B4B4B4] hover:border-white transition-all"
        >
          <h1>News</h1>
        </a>
        <a
          href=""
          className="border-2 border-[#B4B4B4] inline-block px-5 py-[2px] hover:text-white hover:bg-[#B4B4B4] hover:border-white transition-all min-w-[115px] xl:px-7 text-center rounded-full"
        >
          <h1>Daily Life</h1>
        </a>
        <a
          href=""
          className="border-2 border-[#B4B4B4] inline-block px-5 py-[2px] rounded-full xl:px-7 hover:text-white hover:bg-[#B4B4B4] hover:border-white transition-all"
        >
          <h1>Games</h1>
        </a>
      </div>
    </div>
  );
}
