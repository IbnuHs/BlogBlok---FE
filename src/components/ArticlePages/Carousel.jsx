import React from "react";
import Carousel from "react-material-ui-carousel";
import { CardCarousel } from "./CardCarousel";
import image from "../../assets/ux-review.png";
import { topNews } from "../../Data/Data";

export default function CarouselSection() {
  return (
    <div>
      <Carousel navButtonsAlwaysVisible indicators={false}>
        {topNews.map((articles, index) => {
          return (
            <CardCarousel
              key={index}
              image={articles.image}
              title={articles.title}
              desc={articles.desc}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
