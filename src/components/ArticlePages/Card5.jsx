import React from "react";

export default function Card5(props) {
  return (
    <div className="grid grid-cols-2 gap-4 items-center w-full md:gap-5">
      <img
        src={props.image}
        alt=""
        className=" rounded-md aspect-[5/3]  w-full object-cover object-center md:max-w-[240px] lg:max-w-[85%] m-auto "
      />
      {/* <div className="max-w-[35%] rounded-md aspect-[5/3] md:aspect-video  w-full border-2 border-black overflow-hidden">
      </div> */}
      <div className="flex flex-col  md:gap-1 xl:gap-2">
        <a href="">
          <h1 className="font-bold text-[14px] line-clamp-2 hover:underline lg:text-[16px] xl:text-[22px]">
            {props.title}
          </h1>
        </a>
        <div className="flex gap-2">
          <div className="flex text-[12px] mt-1 justify-between items-center gap-2 lg:text-[12px] xl:text-[14px]">
            <p className="font-semibold">{props.creator}</p>
            <p className="text-[#7E7F81]">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
