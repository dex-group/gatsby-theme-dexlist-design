/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import { jsx, Box, Card, Link, Image } from 'theme-ui'

export default () => {
  const data = useStaticQuery(navQuery)
  const {
    site: {
      siteMetadata: {
        navLinks
      },
    },
  } = data

  return (
    <Card
      variant='menu'
      sx={{
        minWidth: 184
      }}
    >
      {navLinks.map(nav => (
        <Link
          href={nav.to}
          variant='nav'
        >
          <Image
            variant='avatar'
            src={nav.icon}
            alt={nav.name}
          />
          <Box>
            {nav.name}
          </Box>
          <Card
            className='count'
            variant='count'
          >
            {nav.count}
          </Card>
        </Link>
      ))}
    </Card>
  )
}

const navQuery = graphql`
  query {
    site {
      siteMetadata {
        navLinks {
          to
          name
          count
          icon
        }
      }
    }
  }
`