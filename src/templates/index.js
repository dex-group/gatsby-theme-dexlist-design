import React from 'react'
import { graphql } from 'gatsby'
import Index from '../components/Index'

function IndexPage({ location, data }) {
  return (
    <Index
      data={data}
      location={location}
    />
  )
}

export default React.memo(IndexPage)

export const query = graphql`
  query IndexPage {
    allListYaml(sort: { order: ASC, fields: [id] }) {
      edges {
        node {
          id
          title
          item {
            name
            slogan
            price
            link
            logo {
              childImageSharp {
                fixed(
                  width: 32 height: 32
                ) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
