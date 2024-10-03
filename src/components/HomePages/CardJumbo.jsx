import React from "react";

export default function (props) {
  return (
    <div className="flex flex-col gap-6 md:max-w-[45%] md:gap-4 xl:min-w-[50%] xl:max-w-[65%]">
      <img
        src={props.image}
        alt="thumbnail"
        className="md:aspect-video md:object-center md:object-cover rounded-md xl:w-full"
      />
      <div className="flex flex-col gap-4 md:gap-2 xl:gap-4">
        <a href="">
          <h1 className="text-[21px] font-bold hover:underline md:text-[18px] lg:text-[22px] xl:text-[28px]">
            {props.title}
          </h1>
        </a>
        <div className="flex gap-2">
          <img src={props.creatorProfile} alt="" className="aspect-square" />
          <div className="text-[12px] flex gap-2 items-center lg:text-[14px]">
            <h1 className="max-w-12 lg:max-w-14">{props.creator}</h1>
            <p className="text-[#7E7F81] max-w-12 lg:max-w-14">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
