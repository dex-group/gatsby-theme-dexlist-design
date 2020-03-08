import React from 'react'
import { Link as GLink } from 'gatsby'
import { Box } from 'rebass'
import { Link } from 'theme-ui'

export default props => (
  <Box
    p={2}
    width={4/4}
    sx={{
      textAlign: 'center'
    }}
  >
    <Link
      variant='viewall'
      as={props.to ? GLink : 'a'}
      {...props}
    >
      View all
    </Link>
  </Box>
)