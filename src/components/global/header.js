import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import SlideMenu from './slideMenu'

const Header = props => (
  <header className="header">
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
