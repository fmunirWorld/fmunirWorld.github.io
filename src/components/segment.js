import React from "react"

import "./segment.scss"

const Segment = ({ title, subtitle, content, footer }) => (
  <div class="segment">
    <div class="segment__title">
      {title} {String.fromCharCode(8213)}
    </div>
    <div class="segment__subtitle">{subtitle}</div>
    <div class="segment__content">{content}</div>
    <div class="segment__footer">{footer}</div>
  </div>
)

export default Segment
