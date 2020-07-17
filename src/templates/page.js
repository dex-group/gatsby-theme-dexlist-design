import React from 'react'
import { graphql } from 'gatsby'
import List from "../components/List"

function PageTemplate({ location, data }) {
  return (
    <List
      data={data}
      location={location}
    />
  )
}

export default PageTemplate

export const query = graphql`
  query($id: String!) {
    page: listYaml(id: { eq: $id }) {
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
              width: 32
              height: 32
            ) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`