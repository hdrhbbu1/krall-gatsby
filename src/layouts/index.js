import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import './index.css'

const ListLink = props =>
  <li>
    <Link to={props.to}>
      <span>{props.title}</span>
      <span>{props.year}</span>
    </Link>
  </li>

const Header = props => (
  <header>
  <div className="headerWrapper">
    <h1 itemprop="name">
      <Link to="/" style={{ border: 0 }}>{props.siteTitle}</Link>
    </h1>
    <div>
      <Link to="/info">Information</Link>
    </div>
  </div>
  </header>
)

const Footer = () => (
  <footer>

  <ul className="inline">
    <li><a href="mailto:zach@zachkrall.com">zach@zachkrall.com</a></li>
  </ul>

  <ul className="inline">
    <li><a href="https://twitter.com/zachkrall">Twitter</a></li>
    <li><a href="https://instagram.com/zachkrall">Instagram</a></li>
    <li><a href="https://github.com/zachkrall">GitHub</a></li>
    <li><a href="https://are.na/zach-krall">Are.na</a></li>
    <li><a href="https://keybase.io/zachkrall/">Keybase</a></li>
  </ul>
  </footer>
)

const TemplateWrapper = ({ children, data }) => (
  <div id="container">
    <Helmet
      title="Zach Krall"
      meta={[
        { name: 'description', content: 'Zach Krall is a visual artist and creative technologist based in New York City.' }
      ]}
    />
    <Header siteTitle="Zach Krall"/>

    <div id="content" style={{ margin: '0 auto 6rem auto' }}>
      {children()}
    </div>

    <div id="navigation">

      {data.allMarkdownRemark.totalCount} Projects

      {data.allMarkdownRemark.edges.map(({ node }) =>
      <Link to={node.fields.slug}>  <div key={node.id}>

            {node.frontmatter.title}{", "}{node.frontmatter.date}

        </div></Link>
      )}
    </div>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
