import React from 'react'
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"
import Card4 from "./Card4"
import Card5 from "./Card5"
export const Slider = (props) => {

  let myCards = [
    {
      key: uuidv4(),
      content: <Card1 />,
    },
    {
      key: uuidv4(),
      content: <Card2 />,
    },
    {
      key: uuidv4(),
      content: <Card3 />,
    },
    {
      key: uuidv4(),
      content: <Card4 />,
    },
    {
      key: uuidv4(),
      content: <Card5 />,
    },

  ];

  const table = myCards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <h3 className="carousel-h1" style={{ color: "white", textTransform: "uppercase"}}>Our Advertising Strategies</h3>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
