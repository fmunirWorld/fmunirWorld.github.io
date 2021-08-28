import React from "react"
import { openPopupWidget } from "react-calendly"
import "./calendlyButton.scss"

const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () => {
    console.log("Calendly Button Click...")
    openPopupWidget({ url, prefill, pageSettings, utm })
  }

  return (
    <button className="calendly-button" onClick={onClick}>
      Schedule a Free Consultation
    </button>
  )
}

export default CalendlyButton
