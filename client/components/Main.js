import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

const Main = (props) => {
  const {children} = props

  const changeNavColor = (e) => {
    let navBar = document.getElementsByClassName('home-nav-bar')
    if (e.target.innerHTML === 'HOME') {
      navBar[0].id = 'home-nav-hover'
    } else if (e.target.innerHTML === 'ABOUT') {
      navBar[0].id = 'about-nav-hover'
    } else if (e.target.innerHTML === 'WORK') {
      navBar[0].id = 'work-nav-hover'
    }
  }

  const resetNavColor = () => {
    let navBar = document.getElementById('home-nav-hover') ||
      document.getElementById('about-nav-hover') ||
      document.getElementById('work-nav-hover')
    if (navBar) {
      navBar.removeAttribute('id')
    }
  }

  return (
    <div>
      <nav
        className='home-nav-bar'
        onMouseOver={changeNavColor}
        onMouseOut={resetNavColor}
      >
        <Link to='/' id='home-link'>HOME</Link>
        <Link to='/about' id='about-link'>ABOUT</Link>
        <Link to='/work' id='work-link'>WORK</Link>
      </nav>
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = null

const mapDispatch = null

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  // children: PropTypes.object
}
