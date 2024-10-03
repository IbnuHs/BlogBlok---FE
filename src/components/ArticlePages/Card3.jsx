import React from "react";

export default function Card3(props) {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8 md:items-center xl:min-w-[50%] xl:gap-1">
      <img
        src={props.image}
        alt="thumbnail"
        className="md:aspect-video md:object-center md:object-cover rounded-md xl:w-full xl:max-w-[80%] m-auto"
      />
      <div className="flex flex-col gap-4 md:gap-2 lg:px-10 xl:px-1 xl:gap-8">
        <a href="">
          <h1 className="text-[18px] font-bold md:text-[20px] hover:underline lg:text-[22px] xl:text-[28px]">
            {props.title}
          </h1>
        </a>
        <div className="flex gap-2">
          <img src={props.creatorProfile} alt="" className="aspect-square" />
          <div className="text-[12px] flex gap-3 items-center lg:gap-4 lg:text-[14px]">
            <h1 className="max-w-12 lg:max-w-14">{props.creator}</h1>
            <p className="text-[#7E7F81] max-w-12 lg:max-w-14">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
