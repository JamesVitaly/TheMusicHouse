/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Navbar from "./navbar"
import "./layout.css"


const Container = styled.div`
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const [showScrollingNav, toggleShowScrollingNav] = useState(false);
  const toggleScrollingNav = () => {
    if (document.body.scrollTop >  200 ||  document.documentElement.scrollTop > 200) {
      toggleShowScrollingNav(true)
    } else {
      toggleShowScrollingNav(false)
    }
  }
  useEffect(() => { window.onscroll = () => toggleScrollingNav() });
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
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTHG67F"
        height="0" width="0" style="display:none;visibility:hidden">
      </iframe>
    </noscript>
      <Navbar showScrollingNav={showScrollingNav} siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>
        <footer>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
