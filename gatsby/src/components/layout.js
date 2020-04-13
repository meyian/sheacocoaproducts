/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import logo from "../images/logo.png"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

<header className="header">
<div className="header__logo-wrapper">
<img alt="shea and cocoa logo" className="header__logo" src={logo} />
</div>
<nav className="header__navigation">
<ul className="navigation_list container">
<li>
<a href="#">Home</a>
</li>
<li>
<a href="#">Products</a>
</li>
<li>
<a href="#">About Us</a>
</li>
<li>
<a href="#">Contact Us</a>
</li>
</ul>
</nav>
</header>

        {children}

      <footer>
<hr className="footer__separator mb-5 mt-4" />
<div className="container">
<div className="row">
<div className="col-sm-12">
<h2>Contact</h2>
<ul>
<li>[123-456-7890]</li>
<li>[info@mydomain.com]</li>
</ul>
</div>
<div className="copyright centered_row mt-3">
<p>© {new Date().getFullYear()} by Shea & Cocoa. Proudly created by Ganziano</p>
</div>
</div>
</div>
</footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
