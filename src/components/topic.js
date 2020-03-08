import React from 'react'
import { Box } from 'rebass'
import { Text } from 'theme-ui'

export default props =>
  <Box p={2} width={4/4}>
    <Text
      variant='topic'
      {...props}
    />
  </Box>