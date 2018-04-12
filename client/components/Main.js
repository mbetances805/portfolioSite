import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {HomePage} from './index'

const Main = (props) => {
  const {children} = props
  const introText = [['Hi,'], ["I'm Maria."], ['A Full Stack'], ['Developer.']]
  let key = 1

  return (
    <div>
      <nav>
        <Link to='/'>
          <div className='nav-links' />
          Home
        </Link>
        <Link to='/'>
          <div className='nav-links' />
          About
        </Link>
        <Link to='./'>
          <div className='nav-links' />
          Skills
        </Link>
        <Link to='./'>
          <div className='nav-links' />
          Projects
        </Link>
      </nav>
      <div className='container'>
        <div className='introduction'>
          {
            introText.map(message => {
              let text = message[0].split('')
              return <p key={`${message}-${key++}`}>
                {
                  text.map(letter => {
                    if (letter === ' ') {
                      return <span className='intro-spacing' key={`${letter}-${key++}`}>{letter}</span>
                    } else {
                      return <span className='intro-letters' key={`${letter}-${key++}`}>{letter}</span>
                    }
                  })
                }
              </p>
            })
            }
          <p className='technologies-list'>{'Node.js / React / Redux / Python'}</p>
        </div>
        <p className='initials'>{'MB'}</p>
      </div>
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
