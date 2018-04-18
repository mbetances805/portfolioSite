import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Dot} from './index'

const Home = (props) => {
  // const {children} = props
  const introText = [['Hi,'], ["I'm Maria."], ['A Full Stack'], ['Developer.']]
  const technologiesList = ['Node.js', 'JavaScript', 'React', 'Redux', 'Python',
    'Express.js', 'SQL', 'CSS3', 'HTML5']
  let key = 1

  const showDots = () => {
    let dots = document.querySelectorAll('.dot')
    dots.forEach(dot => {
      dot.style.opacity = 0.2
    })
  }

  return (
    <div className='introduction-container' onMouseOver={showDots}>
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
      <Dot id='first-dot' radius={'30'} color='DeepSkyBlue' />
      <Dot id='second-dot' radius={'10'} color='DeepSkyBlue ' />
      <Dot id='third-dot' radius={'20'} color='#D2BBEE' />
    </div>
  )
}

const mapState = null

const mapDispatch = null

export default withRouter(connect(mapState, mapDispatch)(Home))
