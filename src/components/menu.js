/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import { jsx, Box, Card, Link } from 'theme-ui'

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
    <Card variant='menu'>
      {navLinks.map(nav => (
        <Link
          href={nav.to}
          variant='nav'
        >
          <img
            src={nav.icon}
            alt={nav.name}
            sx={{
              display: 'inline-block',
              width: '24px',
              height: '24px',
              mr: 2,
            }}
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