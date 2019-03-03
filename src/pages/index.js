import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout.js"
import Faq from "../components/faq.js"
import Logo from "../components/logo.js"

import mainImage from "../images/mainImage.jpg"
import crossSectionImage from "../images/crossSection.jpg"
import flour from "../images/flour.svg"
import water from "../images/water.svg"
import salt from "../images/salt.svg"
import yeast from "../images/yeast.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`sourdough`, `bread`, `baking`]} />

      {/* Opening */}
      <div className="openingWrapper">
        <div className = "openingImgContainer">
          <img className="coverImage" src={mainImage} alt="main-image" />
        </div>
        <div className = "valignWrapper">
          <div id="openingContentWrapper">
            <h2 className="openingTagline">the freshest and the healthiest organic sourdough bread in Singapore</h2>
            {/**<div className = "priceWrapper">
              <span id="originalPrice">$12</span>
              <span id="latestPrice">$10</span>
            </div>**/}
            <Link to="/purchase"><button className="button">ORDER NOW</button></Link>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="valignWrapper">
        <div id="aboutUsWrapper">
          <h2 className = "sectionTitle">about us</h2>
          <div className = "logoWrapper">
            <Logo size={"150"} color={"#C49A6B"} />
            <div className = "name">microbakery</div>
          </div>
          <p className = "coverDescription">We are a humble little home bakery who only strives to produce the freshest and the most nutritious sourdough bread.</p>
        </div>
      </div>

      {/* Ingredients */}
      <div className="valignWrapper" id="ingredientsWrapper">
        <h2 className = "sectionTitle">ingredients</h2>
        <div className = "ingredients">
          <div className = "subSectionWrapper">
            <img className="ingredientsIcons" src = {flour} alt="flour" />
            <h3 className="subSectionTitle">flour</h3>
            <p className = "coverDescription">Highest quality organic flour to make our sourdough bread</p>
          </div>
          <div className = "subSectionWrapper">
            <img className="ingredientsIcons" src={water} alt="water" />
            <h3 className="subSectionTitle">water</h3>
            <p className = "coverDescription">Water with 100-150ppm content to give provide the best gluten strength of our bread.</p>
          </div>
          <div className = "subSectionWrapper">
            <img className="ingredientsIcons" src={yeast} alt="yeast" />
            <h3 className="subSectionTitle">yeast</h3>
            <p className = "coverDescription">Fresh sourdough starter that we have been using for many years. Sourdough is a prebiotic, which helps to support the gut micobiome.</p>
          </div>
          <div className = "subSectionWrapper">
            <img className="ingredientsIcons" src={salt} alt="salt" />
            <h3 className="subSectionTitle">salt</h3>
            <p className = "coverDescription">Flavour of our bread solely comes from yeast fermentation. We add salt to enhance the bread flavour and strengthen the gluten during fermentation process.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <Faq />

      {/* Call to Action */}
      <div className="openingWrapper">
        <div className = "openingImgContainer">
          <img className="coverImage" src={crossSectionImage} alt="bread cross section"/>
        </div>
        <div className = "valignWrapper">
          <div id="openingContentWrapper">
            <h2 className="openingTagline">Get it for a healthier lifestyle</h2>
            <div className = "priceWrapper">
              {/**<span id="originalPrice">$12</span>
              <span id="latestPrice">$10</span>**/}
            </div>
            <Link to="/purchase"><button className="button">ORDER NOW</button></Link>
          </div>
        </div>
      </div>
    </Layout>

)

export default IndexPage
