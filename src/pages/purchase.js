import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout.js"
import OrderCard from "../components/orderCard.js"

import image from "../images/coverImage.jpg"

import "../components/css/index.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Purhcase" />
    <div className="uk-section">
      <div className = "uk-container">
        <ul class="uk-breadcrumb">
          <li><Link to="/"><a>Main</a></Link></li>
          <li class="uk-disabled"><a>Classic Sourdough bread</a></li>
        </ul>
      </div>
      <div className = "uk-container uk-margin-top">
        <OrderCard image={image}/>
      </div>
    </div>
  </Layout>
)

export default SecondPage
