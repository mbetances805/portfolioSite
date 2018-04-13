import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {HomePage} from './index'

const Main = (props) => {
  const {children} = props
  const introText = [['Hi,'], ["I'm Maria."], ['A Full Stack'], ['Developer.']]
  const technologiesList = ['HTML5', 'CSS3', 'Express.js', 'SQL', 'React', 'Node.js',
    'JavaScript', 'Redux', 'Python']
  let key = 1

  return (
    <div>
      <nav>
        <Link to='/' className='home-nav-hover'>Home</Link>
        <Link to='/' className='about-nav-hover'>About</Link>
        <Link to='/' className='projects-nav-hover'>Projects</Link>
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
          <p className='technologies-small-list'>{'Node.js / React / Redux / Python'}</p>
        </div>
        <p className='initials'>{'MB'}</p>
        <div className='technology-large-list'>
          {
            technologiesList.map(technology => {
              return <p
                className='technology-names'
                id={technology.toLowerCase()}
                key={`${technology.toLowerCase()}-${key++}`}>
                {technology}
              </p>
            })
          }
        </div>
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
