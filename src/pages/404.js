import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFound = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 600px;
  width: 100%;
  padding: 32px;
  p {
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 3rem;
  }
`

const NotFoundPage = (location) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <NotFound>
      <Styled.h1>
        <span>(</span> ·<sup>︵</sup>· <span>)</span>
      </Styled.h1>
      <h2>Nothing to see here.</h2>
      <p>That page doesn't exist! Check to see if it was a typo, or use the navigation to go to a page that hasn't been swallowed by the vortex.</p>
      <Link to="/">Go back home</Link>
    </NotFound>
  </Layout>
)

export default NotFoundPage
