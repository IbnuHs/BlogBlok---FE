import React from "react";
import bg from "../../assets/background-copy.jpg";
import bg1 from "../../assets/background.jpg";

export default function Background() {
  return (
    <div className="max-h-[160px] overflow-hidden md:max-h-[180px] lg:max-h-[200px] xl:max-h-[250px]">
      <img
        src={bg}
        alt=""
        loading="lazy"
        className="h-full object-top object-cover aspect-video"
      />
    </div>
  );
}
