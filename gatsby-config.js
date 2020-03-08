const path = require(`path`)
const config = require('./src/utils/siteConfig')

module.exports = options => {
  const { mdx = true } = options

  return {
    siteMetadata: {
      siteUrl: config.siteUrl,
      title: config.siteTitle,
      description: config.Description,
      author: config.Author,
      twitter: config.Twitter,
      facebook: config.fbAppID,
      organization: config.Organization,
      canonicalUrl: config.canonicalUrl,
      image: config.Image,
      navLinks: [
        {
          to: "/",
          name: "resources",
          count: "517",
          icon: '/images/menu-resources.png'
        },
        {
          to: "/studios",
          name: "studios",
          count: "237",
          icon: '/images/menu-studios.png'
        },
        {
          to: "/designers",
          name: "designers",
          count: "27",
          icon: '/images/menu-designers.png'
        },
        {
          to: "/tools",
          name: "tools",
          count: "54",
          icon: '/images/menu-tools.png'
        },
        {
          to: "/ios",
          name: "iOS",
          count: "324",
          icon: '/images/menu-iOS.png'
        },
        {
          to: "/mac",
          name: "macOS",
          count: "39",
          icon: '/images/menu-macOS.png'
        }
      ],
    },
    plugins: [
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          // defaultLayouts: {
          //   default: require.resolve(`./src/components/layout.js`),
          // },
          gatsbyRemarkPlugins: [{
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1380,
                linkImagesToOriginal: false,
              },
            },
          ],
          remarkPlugins: [require(`remark-slug`)],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.contentPath || `data/design`,
          path: options.contentPath || `data/design`
        },
      },
      {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
          endpoint: 'https://one.us20.list-manage.com/subscribe/post?u=9a0bbc8e40f2b3e33460a05e8&amp;id=60f0cea21a',
        },
      },
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-transformer-yaml',
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-emotion',
      'gatsby-plugin-catch-links'
    ]
  }
}
