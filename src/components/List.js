import React from 'react'
import Img from "gatsby-image"
import SEO from './seo'
import Layout from './layout'
import { Box, Flex } from 'rebass'
import Section from './section'
import Topic from './topic'
import Card from './card'
import Item from './item'
import Avatar from './avatar'
import Name from './name'
import Slogan from './slogan'
import Price from './tagsPrice'

const List = ({ data: { page }, location }) => {
  const items = page.item
  return (
    <Layout location={location}>
      <SEO title={page.title} />
      <Section>
        <Topic>{page.title}</Topic>
        {items.map(props => (
          <Card
            key={props.link}
            href={props.link}
            title={props.name}
          >
            <Item>
              <Flex>
                <Avatar>
                  <Img
                    fixed={props.logo.childImageSharp.fixed}
                  />
                </Avatar>
                <Box pl={2}>
                  <Name>
                    {props.name}
                    <Price>{props.price}</Price>
                  </Name>
                  <Slogan>{props.slogan}</Slogan>
                </Box>
              </Flex>
            </Item>
          </Card>
        ))}
      </Section>
    </Layout>
  )
}

export default List