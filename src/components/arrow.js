import React from "react"
import "./arrow.css"

const arrow = () => {
  return (
    <svg
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9H25"
        stroke="#0E213F"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path d="M18 1L26 9L18 16.415" stroke="#0E213F" strokeWidth="2" />
    </svg>
  )
}

export default arrow
