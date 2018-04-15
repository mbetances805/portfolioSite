import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Dot} from './index'

const Main = (props) => {
  // const {children} = props
  const introText = [['Hi,'], ["I'm Maria."], ['A Full Stack'], ['Developer.']]
  const technologiesList = ['Node.js', 'React', 'Redux', 'Python',
    'Express.js', 'SQL', 'CSS3', 'HTML5']
  let key = 1

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

  const showDots = () => {
    let dots = document.querySelectorAll('.dot')
    dots.forEach(dot => {
      dot.style.opacity = 0.2
    })
  }

  return (
    <div>
      <nav
        className='home-nav-bar'
        onMouseOver={changeNavColor}
        onMouseOut={resetNavColor}
      >
        <Link to='/' id='home-link'>HOME</Link><div className='slider' />
        <Link to='/' id='about-link'>ABOUT</Link><div className='slider' />
        <Link to='/' id='work-link'>WORK</Link><div className='slider' />
      </nav>
      <div className='container' onMouseOver={showDots}>
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
                      if (letter === 'M') {
                        return <span className='intro-letters' id='m-letter' key={`${letter}-${key++}`}>{letter}</span>
                      } else {
                        return <span className='intro-letters' key={`${letter}-${key++}`}>{letter}</span>
                      }
                    }
                  })
                }
              </p>
            })
          }
        </div>
        <p className='initials'>{'MB'}</p>
        <div className='technology-large-list'>
          {
            technologiesList.map(technology => {
              return <p
                className='technology-names'
                id={technology.toLowerCase().replace(/\./g, '-')}
                key={`${technology.toLowerCase()}-${key++}`}>
                {technology}
              </p>
            })
          }
        </div>
        <Dot id='first-dot' radius={'30'} />
        <Dot id='second-dot' radius={'50'} />
        <Dot id='third-dot' radius={'20'} />
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
