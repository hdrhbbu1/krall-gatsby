import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import './index.css'

//{node.frontmatter.title}{", "}{node.frontmatter.date}


const TemplateWrapper = ({ children, data }) => (
  <div id="container">
    <Helmet
      title="Zach Krall"
      meta={[
        { name: 'description', content: 'Zach Krall is a visual artist and creative technologist based in New York City.' },
        { name: 'msapplication-config', content: '/assets/browserconfig.xml' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' }
      ]}
      link={[
        { rel: 'apple-touch-icon', size: '180x180', href: '/assets/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', size: '32x32', href: '/assets/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', size: '16x16', href: '/assets/favicon-16x16.png' },
        { rel: 'manifest', href: '/assets/manifest.json' },
        { rel: 'mask-icon', href: '/assets/safari-pinned-tab.svg', color: '#444444' },
        { rel: 'shortcut icon', href: '/assets/favicon.ico' }
      ]}
    />
    <header>
    <div className="headerWrapper">
      <h1 itemprop="name" class="name">
        ./<Link to="/" style={{ border: 0 }}>Zach_Krall</Link>
      </h1>
      <div>
        <Link to="/info">Info</Link>
      </div>
    </div>
    </header>

    <div id="content" style={{ margin: '0 auto 6rem auto' }}>
      {children()}
    </div>

    <div id="navigation">

      {data.allMarkdownRemark.edges.map(({ node }) => <Link to={node.fields.slug}><div key={node.id} className="projectItem">{(node.frontmatter.thumbnail !== null)?<img src={node.frontmatter.thumbnail.childImageSharp.original.src} alt={node.frontmatter.title}/>:<span>?</span>}</div></Link>)}
    </div>

    <footer>

    <ul className="inline">
      <li><a href="mailto:zach@zachkrall.com">zach@zachkrall.com</a></li>
    </ul>

    <ul className="inline">
      <li><a href="https://twitter.com/zachkrall">Twitter</a></li>
      <li><a href="https://instagram.com/zachkrall">Instagram</a></li>
      <li><a href="https://github.com/zachkrall">GitHub</a></li>
      <li><a href="https://are.na/zach-krall">Are.na</a></li>
      <li><a href="https://zachkrall.tumblr.com">Tumblr</a></li>
      <li><a href="https://keybase.io/zachkrall/">Keybase</a></li>
    </ul>

    <a title="Web Analytics" href="http://statcounter.com/" target="_blank"><img src="//c.statcounter.com/11548879/0/697b2f39/0/" alt="Web Analytics" style={{opacity: '0.0'}}/></a>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
query new{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC} ){
    totalCount
    edges{
      node{
        id
        fields{
          slug
        }
        frontmatter{
          title
          date(formatString: "YYYY")
          medium
          dimensions
          project_status
          duration
          thumbnail{
            childImageSharp{
              original{
                src
                width
                height
              }
              responsiveSizes(maxWidth: 400){
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  }
}
`
