import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import chatRandomMockup from '../../public/images/chatRandomMockup.jpg'
import toDoMockup from '../../public/images/toDoMockup.jpg'
import ideaStormMockup from '../../public/images/ideaStormMockup.jpg'
import {Dot} from './index'

const Work = () => {
  const showDots = () => {
    let dots = document.querySelectorAll('.dot')
    dots.forEach(dot => {
      dot.style.opacity = 0.2
    })
  }
  return (
    <div className='about-container' onMouseOver={showDots}>
      <Dot id='fourth-dot' radius={'20'} color='DeepSkyBlue' />
      <Dot id='fifth-dot' radius={'50'} color='skyblue' />
      <Dot id='sixth-dot' radius={'40'} color='#4A5fD3' />
      <Dot id='seventh-dot' radius={'20'} color='thistle' />
      {/* <p className='initials' id='work-initials'>{'MB'}</p> */}
      <div className='work-container'>
        {/* Temporary solution. Needs to be dry and retrieve data from back end
          and GitHub API. Images need to be translated to elements in the DOM.
          Need to make mobile friendly. */}
        <div className='work-section'>
          <p className='work-title'>
            <a href='https://chatrandom.herokuapp.com/'>
              <span>{'Chat Random'}</span>
            </a>
          </p>
          <div className='work-stack'>
            <p>{'Node.js'}</p>
            <p>{'JavaScript'}</p>
            <p>{'React-Redux'}</p>
            <p>{'HTML5'}</p>
            <p>{'SCSS'}</p>
            <p>{'Socket.io'}</p>
          </div>
          <img
            src={chatRandomMockup}
            className='work-image-one'
          />
          <div className='work-summary'>
            {
              "Chat with a stranger online! " +
              "Chat Random is a messenger that leverages the " +
              "application's state to manage sessions, users, and messages. " +
              "Upon entering a username, users are paired " +
              "with other available users and they are able to " +
              "chat away!"}
          </div>
        </div>
        <div className='work-section'>
          <p className='work-title'>
            <a href='https://daily-to-do-list.herokuapp.com/welcome'>
              <span>{'toDo'}</span>
            </a>
          </p>
          <div className='work-stack'>
            <p>{'Node.js'}</p>
            <p>{'JavaScript'}</p>
            <p>{'React-Redux'}</p>
            <p>{'HTML5'}</p>
            <p>{'CSS3'}</p>
            <p>{'PostgreSQL'}</p>
            <p>{'Express'}</p>
            <p>{'D3.js'}</p>
          </div>
          <img
            src={toDoMockup}
            className='work-image-one'
          />
          <div className='work-summary'>
            {
              "Track your daily list of to do's with a simple and clean design. " +
              "Includes descriptive statistics on your productivity leveraging D3.js."
            }
          </div>
        </div>
        <div className='work-section'>
          <p className='work-title'>
            <a href='https://idea-storm.herokuapp.com/'>
              <span>{'IdeaStorm'}</span>
            </a>
          </p>
          <div className='work-stack'>
            <p>{'Node.js'}</p>
            <p>{'JavaScript'}</p>
            <p>{'React-Redux'}</p>
            <p>{'HTML5'}</p>
            <p>{'CSS3'}</p>
            <p>{'PostgreSQL'}</p>
            <p>{'Express'}</p>
            <p>{'D3.js'}</p>
          </div>
          <img
            src={ideaStormMockup}
            className='work-image-one'
          />
          <div className='work-summary'>
            {
              "A real-time collaboration tool that simplifies and facilitates brainstorming " +
              "sessions between team members. Users are able to remotely share, categorize, " +
              "and vote on their ideas during virtual whiteboard sessions."
            }
          </div>
        </div>
      </div>
      {/* <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon
          fill='white'
          points='0,100 100,0 100,100'
        />
      </svg> */}
    </div>
  )
}

const mapState = null

const mapDispatch = null

export default withRouter(connect(mapState, mapDispatch)(Work))
