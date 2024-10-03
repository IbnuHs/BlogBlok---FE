import React from "react";
import Card2 from "../HomePages/Card2";
import CardJumbo from "../HomePages/CardJumbo";
import { gamesArticles } from "../../Data/Data";

export default function GamesSection() {
  const articles = gamesArticles.slice(1, 4);
  return (
    <div className="mt-8 px-5 xl:px-32 lg:mt-16">
      <h1 className="font-semibold text-center text-[22px] lg:text-[20px] xl:text-[28px] ">
        Games
      </h1>
      <div className="mt-7 flex flex-col md:flex-row gap-8 lg:gap-12 lg:mt-16 ">
        <CardJumbo
          image={gamesArticles[0].image}
          title={gamesArticles[0].title}
          creator={gamesArticles[0].creator}
          creatorProfile={gamesArticles[0].creatorProfile}
          date={gamesArticles[0].date}
        />
        <div className="flex flex-col justify-center md:max-w-[50%] items-center gap-3 md:mt-0 md:justify-start md:gap-10 lg:items-start lg:gap-11">
          {articles.map((articles, index) => {
            return (
              <Card2
                key={index}
                thumb={articles.image}
                title={articles.title}
                creator={`By ${articles.creator}`}
                date={articles.date}
              />
            );
          })}
          <div className="self-end items-end underline mt-4">
            <a
              href=""
              className="text-right text-[15px] text-blue-700 md:text-[14px] lg:text-[16px] xl:text-[18px]"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
