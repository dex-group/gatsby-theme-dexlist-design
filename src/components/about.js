/** @jsx jsx */
import React from 'react'
import { useRef, useState } from "react"
import useOnClickOutside from "use-onclickoutside"
import { motion } from "framer-motion"
import { jsx, Box } from 'theme-ui'
import AboutMenu from './aboutMenu'
import Submit from './submit'

const about = {
  open: {
    opacity: 1,
    visibility: "visible",
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      restDelta: 10
    }
  },
  closed: {
    opacity: 0,
    y: "-20%",
    transition: {
      delay: .05,
      type: "spring",
      stiffness: 400,
      damping: 30
    },
    transitionEnd: {
      visibility: "hidden"
    }
  }
}

export default () => {

  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => {
    if (isOpen) setIsOpen(false)
  })

  return (
    <>
      {setIsOpen && (
        <motion.div
          ref={ref}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          sx={{
            position: 'relative'
          }}
        >
          <Box
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              mr: 3,
              fontSize: 3,
              cursor: 'pointer',
              display: 'inline-block'
            }}
          >About</Box>
          <motion.div
            variants={about}
            sx={{
              variant: 'styles.overlay',
              right: 76
            }}
          >
            <AboutMenu />
          </motion.div>
          <Submit />
        </motion.div>
      )}
    </>
  )
}