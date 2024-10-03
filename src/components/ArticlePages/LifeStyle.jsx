import React from "react";
import { lifeStyleArticles } from "../../Data/Data";
import Card5 from "./Card5";

export default function LifeStyle() {
  return (
    <div className="mt-8 px-5 xl:px-32 lg:mt-24 pb-10">
      <h1 className="font-semibold text-center text-[22px] lg:text-[20px] xl:text-[28px]">
        LifeStyle
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-x-10 xl:mt-16">
        {lifeStyleArticles.map((articles, index) => {
          return (
            <Card5
              key={index}
              image={articles.image}
              title={articles.title}
              profile={articles.creatorProfile}
              creator={articles.creator}
              date={articles.date}
            />
          );
        })}
      </div>
      <div className="self-end items-end underline mt-4 text-center xl:mt-8">
        <a
          href=""
          className="text-right text-[15px] text-blue-700 md:text-[14px] lg:text-[16px]"
        >
          Read More...
        </a>
      </div>
    </div>
  );
}
