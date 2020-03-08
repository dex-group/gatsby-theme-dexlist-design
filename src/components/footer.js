/** @jsx jsx */
import { jsx } from 'theme-ui'
//import { Link, useStaticQuery, graphql } from "gatsby"
//import { Flex } from 'rebass'
import FooterNote from './footernote'
import Subscribe from './subscribe'

export default () => {
  // const data = useStaticQuery(navQuery)
  // const {
  //   site: {
  //     siteMetadata: {
  //       navLinks
  //     },
  //   },
  // } = data

  return (
  <footer
    sx={{
      variant: 'styles.footer',
      margin: '0 auto',
      maxWidth: '600px'
    }}
  >
    <Subscribe />
    {/* <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        py: 3,
      }}
    >
      {navLinks.map(nav => (
        <Link
          to={nav.to}
          sx={{
            variant: 'styles.navlink',
            p: 2,
            color: 'text',
            '&:hover': {
              color: 'highlight',
            }
          }}
        >
          {nav.name}
        </Link>
      ))}
    </Flex> */}
    <FooterNote />
  </footer>
  )
}

// const navQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         navLinks {
//           to
//           name
//         }
//       }
//     }
//   }
// `
