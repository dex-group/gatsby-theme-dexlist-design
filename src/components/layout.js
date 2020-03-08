import React, { useState, useRef } from 'react'
import { Global, css } from '@emotion/core'
import { Box } from 'rebass'
import Sidebar from './sidebar'
import Header from './header'
import Footer from './footer'
import Breadcrumb from './breadcrumb'

export default props => {
  const [menu, setMenu] = useState(false)
  const nav = useRef(null)
  const fullwidth = props.location.pathname === '/404/'
  const resources = props.location.pathname === '/'
  return (
    <>
    <Global
      styles={css`
        @supports (font-variation-settings: normal) {
          html { font-family: 'Inter var', sans-serif }
        }
        html {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%
        }
        html, body {
          height: 100%
        }
        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale
        }
        li > a {
          padding: 0 !important;
          font-size: 11px !important
        }
        a {
          text-decoration: none;
          position: relative;
          display: inline-block;
          transition: all .2s ease 0s
        }
        a:active, a:hover {
          outline-width: 0
        }
        .links {
          transition: none !important
        }
      `}
    />

    {!resources ? (
      <Header>
        <Breadcrumb>resources</Breadcrumb>
      </Header>
    ) : (
      <Header />
    )}
    {!fullwidth ? (
      <Sidebar
        nav={nav}
        open={menu}
        setMenu={setMenu}>
        <Box as='main'>
          {props.children}
        </Box>
      </Sidebar>
    ) : (
      <Box as='main'>
        {props.children}
      </Box>
    )}
    <Footer />
  </>
  )
}
