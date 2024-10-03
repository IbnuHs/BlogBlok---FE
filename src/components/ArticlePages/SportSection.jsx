import React from "react";
import BigCard from "./BigCard";
import { sportArticles } from "../../Data/Data";

export default function SportSection() {
  return (
    <div className="px-5 mt-5 md lg:px-10 xl:px-32">
      <h1 className="font-semibold text-[20px] lg:text-[24px] xl:text-[28px]">
        Sport
      </h1>
      <div className="flex flex-col gap-8 mt-5 items-center justify-center md:flex-row md:grid md:grid-cols-3 xl:gap-1 m-auto">
        {sportArticles.map((articles, index) => {
          return (
            <BigCard
              key={index}
              image={articles.image}
              creator={articles.creator}
              date={articles.date}
              title={articles.title}
            />
          );
        })}
      </div>
      <a
        href=""
        className="block text-right underline text-blue-600 mt-8 xl:text-[18px] xl:text-center"
      >
        Read More...
      </a>
    </div>
  );
}
