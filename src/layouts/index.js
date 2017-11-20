import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const ListLink = props =>
  <li style={{
    listStyle: 'none',
    width: '100%',
  }}>
    <Link to={props.to} style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.5rem 0'
    }}>
      <span>{props.title}</span>
      <span>{props.year}</span>
    </Link>
  </li>

const Header = () => (
  <div style={{

    marginBottom: '3rem',
    display: 'flex',
    justifyContent: 'space-between'

  }}>

    <h1 itemprop="name" style={{ fontSize: 'inherit' }}>
      <Link to="/" style={{ border: 0 }}>Zach Krall</Link>
    </h1>
    <div>
      <Link to="/info">Information</Link>
    </div>
  </div>
)

const Footer = () => (
  <div>
  <ul style={{ margin: '3rem auto 6rem auto' }}>
    <ListLink to="/art/voice" title="Untitled Sound Piece (First Draft)" year="2017" />
    <ListLink to="/art/bandwidth" title="Bandwidth (Unique Forms of Continuity)" year="2016" />
    <ListLink to="/art/none-all-of-these-people-are-me" title="None/All of these People are Me" year="2013" />
  </ul>

  <ul style={{ display:'inline-block',listStyle:'none'}}>
    <li><Link to="https://twitter.com/zachkrall">Twitter</Link></li>
  </ul>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div style={{
    maxWidth: 900,
    margin: '0 auto',
    padding: '2rem'
  }}>
    <Helmet
      title="Zach Krall"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div id="content" style={{ margin: '0 auto 6rem auto' }}>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
