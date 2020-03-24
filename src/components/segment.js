import React from "react"

import "./segment.scss"

const Segment = (props) => (
  <div class="segment">
    <div class="segment__title">{props.title} {String.fromCharCode(8213)}</div>
    <div class="segment__subtitle">{props.subtitle}</div>
    <div class="segment__content">{props.children}</div>
  </div>
)

export default Segment
