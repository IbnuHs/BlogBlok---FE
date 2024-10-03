import React from "react";
import CarouselSection from "../components/ArticlePages/Carousel";
import CategoryGroupButton from "../components/ArticlePages/CategoryGroupButton";
import SportSection from "../components/ArticlePages/SportSection";
import GamesSection from "../components/ArticlePages/GamesSection";
import HumanitySection from "../components/ArticlePages/HumanitySection";
import LifeStyle from "../components/ArticlePages/LifeStyle";

export default function ArticlesPages() {
  return (
    <div className="min-h-screen">
      <CarouselSection />
      <CategoryGroupButton />
      <SportSection />
      <GamesSection />
      <HumanitySection />
      <LifeStyle />
    </div>
  );
}
