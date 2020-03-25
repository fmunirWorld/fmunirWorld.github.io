import React from "react"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import "./carousel.scss"

const Carousel = ({ id, title, subtitle, children, lastUpdated }) => (
  <div class="carousel" id={id}>
    <div class="carousel__header">
      <div class="title">
        {title} {String.fromCharCode(8213)}
      </div>
      <div class="subtitle">{subtitle}</div>
    </div>

    <div class="carousel__body">{children}</div>

    <div class="carousel__footer">
      <button class="btn-carousel-left">
        <IoIosArrowBack />
      </button>
      <button class="btn-carousel-right" style={{marginLeft: `0.5rem`}}>
        <IoIosArrowForward />
      </button>
      <span>Last updated: {lastUpdated}</span>
    </div>
  </div>
)

export default Carousel
