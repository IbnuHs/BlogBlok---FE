import React from "react";

export default function Card2({ thumb, title, creator, date }) {
  return (
    <div className="flex gap-2 items-center w-full">
      <div className="max-w-[35%] rounded-md aspect-[5/3] md:max-w-[30%]  w-full lg:max-w-[30%] border overflow-hidden">
        <img
          src={thumb}
          alt=""
          loading="lazy"
          className="w-full object-cover object-center"
        />
      </div>
      <div className="max-w-[70%]">
        <a href="">
          <h1 className="font-bold hover:underline text-[12px] md:text-[14px] lg:text-[18px] line-clamp-2">
            {title}
          </h1>
        </a>
        <div className="flex text-[11px] mt-1 justify-between items-center md:mt-0 lg:justify-start">
          <p>{creator}</p>
          <p className="text-[#7E7F81]">• {date}</p>
        </div>
      </div>
    </div>
  );
}
