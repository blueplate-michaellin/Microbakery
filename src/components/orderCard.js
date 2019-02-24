import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./css/orderCard.css"
import whatsappIcon from "../images/whatsapp-24.png";

const OrderCard = ({image}) => {

  return (
    <div className="orderCard uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid">
      <div className="uk-card-media-left uk-cover-container">
        <img src={image} width={600} height={600}  alt="" className="uk-cover"/>
        <canvas width={600} height={600}></canvas>
      </div>
      <div>
        <div className="uk-card-body">
          <h2>Classic Sourdough Bread</h2>
          <p>Organic unbleached white bread flour sourdough bread</p>
          <ul className="uk-list">
              <li>100% unbleached bread flour</li>
              <li>75% hyration</li>
              <li>2.5% salt</li>
              <li>5 hours bulk fermention</li>
              <li>approx. 440g</li>
              <li>19.5cm diameter</li>
              <li>8-10 slices</li>
          </ul>
          <h2>$10.00</h2>
        </div>
        <div className = "uk-card-footer">
          <a href="https://api.whatsapp.com/send?phone=6598269922&text=&source=&data=#" target="_blank">
            <button className="button">
              ORDER via
              <img style={{margin: "0 8px"}} src={whatsappIcon} />
              WHATSAPP
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
