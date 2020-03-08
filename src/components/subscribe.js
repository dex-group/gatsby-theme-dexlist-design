/** @jsx jsx */
import { jsx, Styled, Box, Link } from 'theme-ui'
import { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default () => {

  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    addToMailchimp(email)
      .then((data) => {
        alert(data.result)
      })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <Styled.h2 sx={{ fontSize: 22}}>
        DEX newsletter.
      </Styled.h2>
      <Styled.p>
        I occasionally send out shorter thoughts and ideas to subscribers. I also run a <Link
          variant='newsletter'
          href='https://news.dex.group/'
          target="_blank"
          rel="noopener noreferrer"
        >
          weekly design stuff
        </Link> on Notion, you can catch up previous content, it might be useful for you.</Styled.p>
      <Box
        sx={{
          position: 'relative',
          margin: '0 auto'
        }}
      >
        <input
          placeholder="Your Email?"
          name="email"
          id="email"
          type="text"
          required=""
          className="subscribe"
          onChange={handleEmailChange}
          sx={{
            pr: '106px',
            color: 'text',
            background: 'none',
            border: 0,
            borderRadius: '50px',
            fontSize: '16px',
            height: '56px',
            lineHeight: 1.5,
            outline: 0,
            transition: 'all .3s ease-in',
            //boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px #fdf3f6', //hack to remove chrome's autofill style
            width: '100%',
            '&:focus': {
              color: 'text',
            },
            '&:not(:placeholder-shown) ~ button': {
              opacity: 1
            }
          }}
        />
        <label
          for="email"
          sx= {{
            opacity: 0
          }}
        >
          email
        </label>
        <button
          type="submit"
          sx={{
            px: 2,
            py: 2,
            m: 0,
            fontSize: '16px',
            cursor: 'pointer',
            position: 'absolute',
            right: '16px',
            top: '10px',
            display: 'inline-block',
            border: 'none',
            color: 'highlight',
            textAlign: 'center',
            appearance: 'none',
            background: 'none',
            opacity: 0
          }}
        >
          Subscribe
        </button>
      </Box>
    </form>
  )
}