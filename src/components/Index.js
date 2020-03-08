import React from 'react'
import Layout from './layout'
import SEO from './seo'
import Img from "gatsby-image"
import { Box, Flex } from 'rebass'
import Section from './section'
import Topic from './topic'
import Card from './card'
import Item from './item'
import Avatar from './avatar'
import Name from './name'
import Slogan from './slogan'
import Price from './tagsPrice'
import Viewall from './viewall'

function shuffle(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

const Index = ({ data: { allListYaml }, location }) => {
  const cards = allListYaml.edges
  return (
    <Layout location={location}>
      <SEO title='' keywords={[`bookmarks`, `design`, `all-in-one`]} />
      {cards.map(({ node }) => {
        const items = node.item
        const shuffledItems = shuffle(items)
        const url = `resources/${node.id}`
        return (
          <Section key={node.id}>
            <Topic>{node.title}</Topic>
            {shuffledItems.slice(0, 24).map(item => {
              return (
              <Card
                key={item.link}
                href={item.link}
                title={item.name}
              >
                <Item>
                  <Flex>
                    <Avatar>
                      <Img
                        fixed={item.logo.childImageSharp.fixed}
                      />
                    </Avatar>
                    <Box pl={2}>
                      <Name>
                        {item.name}
                        <Price>{item.price}</Price>
                      </Name>
                      <Slogan>{item.slogan}</Slogan>
                    </Box>
                  </Flex>
                </Item>
              </Card>
              )
            })}
            {(items.length >=24) ? <Viewall to={url} /> : null}
          </Section>
        )
      })}
    </Layout>
  )
}

export default Index