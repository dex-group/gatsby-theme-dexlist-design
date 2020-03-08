import React from 'react'
import { Styled, Box } from 'theme-ui'

export default props => (
  <>
  <Box
    sx={{
      px: 1,
      opacity: 0.4
    }}
  >/
  </Box>
  <Box
    sx={{
      px: 1
    }}
  >
    <Styled.h2
      {...props}
    />
  </Box>
  </>
)
