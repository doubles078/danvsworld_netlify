import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import SlideMenu from './slideMenu'

const Header = props => (
  <header className="header">
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="DanVsWorld is the personal website and blog of Dan Donohue.  Posts about fitness, software development, and other assorted projects."
      />
      <title>danvsworld</title>
    </Helmet>
    <div className="wrapper">
      <h1>
        <Link to="/">danvsworld</Link>
      </h1>

      {!props.isBlogPage && <SlideMenu blogposts={props.blogposts} />}
    </div>
  </header>
)

SlideMenu.propTypes = {
  blogposts: PropTypes.array.isRequired,
}

export default Header
