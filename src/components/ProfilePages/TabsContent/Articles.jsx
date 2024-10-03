import React from "react";
import { gamesArticles } from "../../../Data/Data";
import Card5 from "../../ArticlePages/Card5";

export default function Articles() {
  return (
    <div className="flex flex-col gap-4 md:max-w-[70%] m-auto lg:max-w-[80%] mt-5 xl:gap-8">
      {gamesArticles.map((articles, index) => {
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
  );
}
