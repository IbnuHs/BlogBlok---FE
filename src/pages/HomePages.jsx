import React from "react";
import Jumbotron from "../components/HomePages/Jumbotron";
import UpdatedArticles from "../components/HomePages/UpdatedArticles";
import TopArticles from "../components/HomePages/TopArticles";

export const HomePages = () => {
  return (
    <div className="">
      <Jumbotron />
      <UpdatedArticles />
      <TopArticles />
    </div>
  );
};
