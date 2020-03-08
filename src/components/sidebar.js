import React from 'react'
import { Location } from '@reach/router'
import { Box, Flex } from 'rebass'
import { Sidenav } from '@theme-ui/sidenav'
import Nav from './nav.mdx'
import Grid from './grid'
import Wrapper from './wrapper'

export default props => (
  <Location>
    {({ location }) => (
    <Flex>
      <Box
        as={Sidenav}
        pathname={location.pathname}
        ref={props.nav}
        open={props.open}
        onClick={e => {
          props.setMenu(false)
        }}
        onBlur={e => {
          props.setMenu(false)
        }}
        onFocus={e => {
          props.setMenu(true)
        }}
        style={{
          transform: props.open ? 'translateX(0)' : 'translateX  (-100%)',
        }}
        sx={{
          position: ['fixed', 'sticky', 'sticky', 'sticky',   'sticky'],
          zIndex: 99,
          alignSelf: 'flex-start', //sticky element isn't sticky   when using flexbox, this is the key.
          top: '58px',
          left: 0,
          bottom: [0, 'auto'],
          width: 128,
          maxHeight: ['100vh', 'none'],
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          lineHeight: '1.8',
          flex: 'none',
          p: 3,
          mt: [64, 0],
          bg: ['background', 'transparent'],
          transition: 'transform .2s ease-out',
          transform: [null, 'none !important'],
        }}>
        <Nav />
      </Box>
      <Box
        sx={{
          width: '100%',
          minWidth: 0,
          minHeight: 'calc(100vh - 64px)',
          mx: 'auto',
          px: [1, 3],
          pb: 5,
        }}>
        <Grid>
          <Wrapper>
            {props.children}
          </Wrapper>
        </Grid>
      </Box>
    </Flex>
    )}
  </Location>
)