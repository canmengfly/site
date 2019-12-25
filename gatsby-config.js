require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env

module.exports = {
  siteMetadata: {
      siteUrl: `https://serverless.com`,
      title: 'Official Serverless Blog',
      description: 'Articles, resources, and posts on serverless architectures, best practices, and how-to.'
    },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-root-import',
    'gatsby-plugin-styled-components',
    
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        output: `/sitemap.xml`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
          `/blog/page/*`,
          `/blog/index`
        ],
        createLinkInHead: true,
        serialize: ({ site, allSitePage }) => 
          allSitePage.edges.map(edge => {
            const url = (site.siteMetadata.siteUrl + edge.node.path).toLowerCase();
            const finalUrl = url.endsWith('/') ? url : `${url}/`
            return {
              url: finalUrl,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [],
            sitemap: null,
            host: null
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },

    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER_ID,
        includeInDevelopment: false,
      },
    },

    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/favicon.png",
        appName: 'Serverless',
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
        }
      }
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allBlog } }) => {
              return allBlog.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  url: site.siteMetadata.siteUrl + "/blog/" + edge.node.id + "/",
                  guid: site.siteMetadata.siteUrl + "/blog/" + edge.node.id + "/",
                  custom_elements: [{ "content:encoded": edge.node.content }],
                })
              })
            },
            query: `
              {
                allBlog(
                  filter: {
                    frontmatter: { date: { ne: null } }
                  },
                  limit: 50,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      id
                      content
                      frontmatter {
                        description
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "blog/feed.xml",
            title: "Serverless Blog RSS Feed",
          },
        ],
      },
    }
  ],
}
