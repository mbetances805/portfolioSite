import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import chatRandomCollage from '../../public/images/chatRandomCollage.jpg'
import toDoCollage from '../../public/images/toDoCollage.jpg'
import ideaStormCollage from '../../public/images/ideaStormCollage.jpg'
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
      <Dot id='sixth-dot' radius={'40'} color='#4A5fD3' />
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
            src={chatRandomCollage}
            className='work-image-one'
          />
          {/* <div className='work-summary'>
            {
              "Chat with a stranger online! " +
              "Chat Random is a messenger that leverages the " +
              "application's state to manage sessions, users, and messages. " +
              "Upon entering a username, users are paired " +
              "with other available users and they are able to " +
              "chat away!"}
          </div> */}
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
            <p>{'SCSS'}</p>
            <p>{'PostgreSQL'}</p>
            <p>{'Express'}</p>
            <p>{'D3.js'}</p>
          </div>
          <img
            src={toDoCollage}
            className='work-image-one'
          />
          {/* }<div className='work-summary'>
            {
              "Track your daily list of to do's with a simple and clean design. " +
              "Includes descriptive statistics on your productivity leveraging D3.js."
            }
          </div> */}
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
            <p>{'SCSS'}</p>
            <p>{'PostgreSQL'}</p>
            <p>{'Express'}</p>
            <p>{'D3.js'}</p>
          </div>
          <img
            src={ideaStormCollage}
            className='work-image-one'
          />
          {/* <div className='work-summary'>
            {
              "A real-time collaboration tool that simplifies and facilitates brainstorming " +
              "sessions across team members. Users are able to remotely share, categorize, " +
              "and vote on their deas through virtual whiteboard sessions."
            }
          </div> */}
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
      {/* <p className='my-stack-list'>{'JavaScript, React-Redux, Node.js, ' +
        'HTML5, CSS3, SQL, Postgres, Sequelize ORM, Python, D3.js, Jasmine, jQuery'}</p> */}
    </div>
  )
}

const mapState = null

const mapDispatch = null

export default withRouter(connect(mapState, mapDispatch)(Work))
