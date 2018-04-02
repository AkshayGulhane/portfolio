import React from 'react'
import Link from 'react-router-dom/Link'
import PropTypes from 'prop-types'
import Social from './Social'
import './Header.css'
import meta from '../../data/meta.json'

class Header extends React.Component {
  render() {
    const minimal = this.props.minimal
    const classes = (minimal ? 'header header--minimal' : 'header')

    return (
      <header className={classes}>
        <Link className="header__name" to="/">
          <span className="header__logo">␥</span>
          <h1 className="header__title">{meta.title}</h1>
          <p className="header__description">{meta.tagline}</p>
        </Link>

        <Social />
      </header>
    )
  }
}

Header.propTypes = {
  minimal: PropTypes.bool
}

export default Header
