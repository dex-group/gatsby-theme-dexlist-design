import React from 'react'
import { Box } from 'rebass'

export default props =>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}
    {...props}
  />