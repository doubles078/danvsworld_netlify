import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <header className='header'>
    <div className='wrapper'>
      <h1>
        <Link to="/">
          Gatsby
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
