import React from "react";

export default function Card4(props) {
  return (
    <div className="flex gap-2 items-center w-full md:grid md:grid-cols-2 md:gap-8 xl:gap-1">
      <img
        src={props.image}
        alt=""
        className="min-w-[42%] max-w-[35%] rounded-md aspect-[5/3] md:aspect-video w-full object-cover object-center md:max-w-none xl:max-w-[80%] m-auto"
      />
      {/* <div className="max-w-[35%] rounded-md aspect-[5/3] md:aspect-video  w-full border-2 border-black overflow-hidden">
      </div> */}
      <div className="flex flex-col  md:gap-2 lg:px-10 xl:px-1 xl:gap-8">
        <a href="">
          <h1 className="font-bold text-[13px] md:text-[20px] line-clamp-2 hover:underline md:line-clamp-3 lg:text-[22px] xl:text-[28px]">
            {props.title}
          </h1>
        </a>
        <div className="flex gap-2">
          <img
            src={props.profile}
            alt=""
            className="aspect-square hidden md:block"
          />
          <div className="flex text-[10px] mt-1 justify-between items-center gap-2 md:text-[12px] md:mt-0 lg:gap-5 lg:justify-start lg:text-[14px]">
            <p className="max-w-12 lg:max-w-14">{props.creator}</p>
            <p className="text-[#7E7F81] max-w-12 lg:max-w-14">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
