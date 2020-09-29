import React from "react"
import Img from "gatsby-image"

import "./heroBol.css"

const HeroBol = ({ image, titleHtml }) => {
  return (
    <div
      className="heroBolWrap"
      style={{
        background:
          "url(" + image?.fluid.src + ") no-repeat center center fixed",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="1200"
        // height="420"
        viewBox="0 0 1200 420"
        fill="none"
      >
        <path
          d="M1137.71 567.662C1137.71 461.54 1137.71 522.268 1137.71 425.169L1014.44 352.542L845.084 266.734C776.048 238.218 525.767 106.798 -18.4372 32.4979L-18.4398 567.662L1137.71 567.662Z"
          fill="#0E213F"
          fillOpacity="0.75"
        />
      </svg>
      <h2 dangerouslySetInnerHTML={{ __html: titleHtml }}></h2>
    </div>
  )
}

export default HeroBol
