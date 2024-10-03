import React from "react";
import Card1 from "./Card1";

export default function UpdatedArticles() {
  return (
    <div className="mt-8 px-5 xl:px-24">
      <h1 className="font-semibold text-center text-[22px] lg:text-[20px] xl:text-[24px]">
        Updated Articles
      </h1>
      <div className="flex flex-col justify-center items-center mt-7 md:grid md: grid-cols-2 md:gap-10 md:px-10 lg:px-0 lg:gap-5 lg:grid-cols-4 xl:mt-14 xl:gap-6">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>

      <div className="text-right mt-3">
        <a
          href=""
          className="underline text-blue-600 text-[16px] inline-block xl:text-[16px]"
        >
          Read More...
        </a>
      </div>
    </div>
  );
}
