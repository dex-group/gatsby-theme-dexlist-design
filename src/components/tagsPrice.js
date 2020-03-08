import React from 'react'
import { Box } from 'theme-ui'

const Price = props =>
  <Box
    as='span'
    sx={{
      color: 'highlight',
      fontSize: '10px',
      pl: 2
    }}
    {...props}
  />

export default Price