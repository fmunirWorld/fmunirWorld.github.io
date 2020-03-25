import React from "react"

import "./carouselItem.scss"

const CarouselItem = ({ title, children }) => (
  <div class="carousel__item">
    <div class="carousel__item__title">{title}</div>
    <div class="carousel__item__content">{children}</div>
  </div>
)

export default CarouselItem
