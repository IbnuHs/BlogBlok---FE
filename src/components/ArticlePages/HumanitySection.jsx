import React from "react";
import Card3 from "./Card3";
import { humanityArticles } from "../../Data/Data";
import Card4 from "./Card4";

export default function HumanitySection() {
  const articles = humanityArticles.slice(1, 4);
  return (
    <div className="mt-8 px-5 xl:px-32 lg:mt-16">
      <h1 className="font-semibold text-center text-[22px] lg:text-[20px] xl:text-[28px] mb-8 xl:mb-16">
        Humanity
      </h1>
      <Card3
        image={humanityArticles[0].image}
        title={humanityArticles[0].title}
        creator={humanityArticles[0].creator}
        creatorProfile={humanityArticles[0].creatorProfile}
        date={humanityArticles[0].date}
      />
      <div className="flex flex-col gap-4 mt-5 xl:gap-8 xl:mt-8">
        {articles.map((i, index) => {
          return (
            <Card4
              key={index}
              image={i.image}
              title={i.title}
              profile={i.creatorProfile}
              creator={i.creator}
              date={i.date}
            />
          );
        })}
      </div>
      <div className=" text-center items-end underline mt-5 xl:mt-12">
        <a
          href=""
          className="text-right text-[15px] text-blue-700 md:text-[14px] lg:text-[16px] xl:text-[18px]"
        >
          Read More...
        </a>
      </div>
    </div>
  );
}
