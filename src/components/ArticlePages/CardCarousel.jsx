import React from "react";
import image from "../../assets/ux-review.png";
// import paper

export const CardCarousel = (props) => {
  return (
    <div className="relative h-full w-full object-cover lg:max-h-[500px] xl:max-h-[650px]">
      <img
        src={props.image}
        alt=""
        loading="lazy"
        className="w-full aspect-square object-cover object-center items-center md:aspect-video"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000074] text-white p-5 flex flex-col justify-between md:p-8 lg:px-10 xl:px-32 xl:py-11 z-0">
        <h1 className="text-[24px] font-bold lg:text-[34px] xl:text-[40px]">
          Top News
        </h1>
        <div className="flex flex-col gap-3">
          <a href="" className="hover:underline">
            <h1 className="font-semibold text-[20px] lg:text-[28px] xl:text-[34px]">
              {props.title}
            </h1>
          </a>
          <p className=" text-[14px] line-clamp-5 lg:text-[16px] xl:text-[18px] xl:line-clamp-6">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};
