import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import chatRandomMockup from '../../public/images/chatRandomMockup.jpg'

let technologies = ['React-Redux', 'Node.js', 'Express', 'SCSS']
let key = 1

const Work = () => {
  return (
    <div>
      <h2 className='work-section'>{'Personal Projects'}</h2>
      <div className='work-container'>
        <div className='work-title'>
          <div
            className='work-summary'>
            {'Chat with strangers online!'}
          </div>
          <a href='https://chatrandom.herokuapp.com/'>
            <h2>{'Chat Random'}</h2>
          </a>
          <img
            src={chatRandomMockup}
            className='chat-random-mockup'
            width='550vw'
            height='400vh'
          />
          <p>
            {
              "A messenger that uses the application's state " +
              'to track sessions, users, and messages.'
            }
          </p>
          <div className='work-tech-list'>
            {
                technologies.map(technology => {
                  return <div className='work-technologies' key={`${technology}-${key}`}>{technology}</div>
                })
            }
          </div>
        </div>
        <h3 className='work-title'>{'toDo'}</h3>
        <h3 className='work-title'>{'IdeaStorm'}</h3>
      </div>
      <h2 className='work-section'>{'Open Source Contributions'}</h2>
      <h3 className='work-title'>{'pantry-for-good'}</h3>
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default withRouter(connect(mapState, mapDispatch)(Work))
