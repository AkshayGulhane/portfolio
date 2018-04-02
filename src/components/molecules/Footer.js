import React from 'react'
import meta from '../../data/meta.json'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <small>© {year} {meta.title} &mdash; All Rights Reserved</small>
    </footer>
  )
}

export default Footer
