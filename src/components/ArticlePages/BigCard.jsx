import React from "react";
import pietrangelo from "../../assets/Pietrangelo.png";
import derrick from "../../assets/Derrick.png";
import hockey from "../../assets/Hockey.png";

export default function BigCard(props) {
  return (
    <div className="max-w-[360px]">
      <div className="rounded-md items-center min-w-[200px] min-h-full overflow-hidden">
        <img
          src={props.image}
          alt=""
          className="w-full h-full aspect-video object-cover"
        />
      </div>
      <div className="mt-2">
        <a href="">
          <h1 className="font-semibold text-[18px] line-clamp-2 hover:underline md:text-[14px] lg:text-[20px] xl:text-[24px]">
            {props.title}
          </h1>
        </a>
        <div className="flex gap-2 text-[14px] mt-2 items-center md:text-[12px] md:mt-0 lg:justify-start lg:text-[14px] xl:text-[16px]">
          <p>{props.creator}</p>
          <p className="text-[#7E7F81]">• {props.date}</p>
        </div>
      </div>
    </div>
  );
}
