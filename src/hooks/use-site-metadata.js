import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetaData {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            twitter
            canonicalUrl
            image
          }
        }
      }
    `
  )
  return site.siteMetadata
}
