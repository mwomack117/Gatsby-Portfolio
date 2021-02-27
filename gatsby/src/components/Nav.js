import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <section id="hero">
      <h2 id="brand">
        <Link to="#">M / W</Link>
      </h2>
      <nav>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            \
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/photography">About</Link>
            </li>
            <li>
              <Link to="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}
