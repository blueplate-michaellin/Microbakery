import React from "react"
import PropTypes from "prop-types"
import Head from "./head.js"

import "./css/layout.css"

import Logo from "./logo.js"
import instagram from "../images/instagram.svg"

const Layout = ({ children }) => {

  const handleIconClick = () => {
    window.scrollTo(0,0)
  }
  return (
    <div className = "pageWrapper">
      <Head />
      <div className="topNavBar">
        <div className = "topNavLogoWrapper">
        <a onClick={handleIconClick}>
          <Logo size={"34"} color={"#F8F8F8"}/>
          </a>
        </div>
      </div>
      <div className = "topNavSpacer"></div>

      {children}

        {/* Social Media */}
        <div className = "socialMediaWrapper valignWrapper">
          <h3 className = "sectionTitle">follow us</h3>
          <a href="https://www.instagram.com/micr0bakery"><img className="socialMediaIcons" src={instagram} alt="instagram icon" /></a>
        </div>

        {/* Footer */}
        <div className = "footer">
          <p id="copyright">&copy; microbakery.co</p>
        </div>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
