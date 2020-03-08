/** @jsx jsx */
import { useRef, useState } from "react"
import useOnClickOutside from "use-onclickoutside"
import { motion } from "framer-motion"
import { jsx, Box } from 'theme-ui'
import Logo from './logo'
import Menu from './menu'
import Submit from './submit'

const menu = {
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

const Header = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => {
    if (isOpen) setIsOpen(false)
  })

  return (
    <header
      sx={{
        variant: 'styles.header',
      }}
    >
      {setIsOpen && (
      <motion.div
        ref={ref}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        sx={{
          variant: 'styles.breadcrumb',
          position: 'relative'
        }}
      >
        <Logo toggle={() => setIsOpen(!isOpen)} />
        <motion.div
          variants={menu}
          sx={{
            variant: 'styles.overlay',
          }}
        >
          <Menu />
        </motion.div>
        <Box
          sx={{
            variant: 'styles.breadcrumb',
          }}
        >
          {children}
        </Box>
      </motion.div>
      )}
      <Submit />
    </header>
  )
}

export default Header