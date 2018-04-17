import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PortfolioPic from '../../public/images/PortfolioSitePic.jpg'
import {Dot} from './index'

const About = () => {
  const showDots = () => {
    let dots = document.querySelectorAll('.dot')
    dots.forEach(dot => {
      dot.style.opacity = 0.2
    })
  }
  return (
    <div className='about-container' onMouseOver={showDots}>
      {/*<svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon
          fill='white'
          points='0,100 100,0 100,100'
        />
      </svg>*/}
      <img
        src={PortfolioPic}
        className='portfolio-pic'
        width='200vw'
        height='225vh'
      />
      <Dot id='fourth-dot' radius={'20'} color='DeepSkyBlue' />
      <Dot id='fifth-dot' radius={'50'} color='#D2BBEE' />
      <Dot id='sixth-dot' radius={'40'} color='#4A5fD3' />
      <p className='about-paragraph'>
        Of recommend residence education be on difficult repulsive offending.
        Judge views had mirth table seems great him for her. Alone all happy
        asked begin fully stand own get. Excuse ye seeing result of we. See
        scale dried songs old may not. Promotion did disposing you household
        any instantly. Hills we do under times at first short an. On projection
        apartments unsatiable so if he entreaties appearance. Rose you wife how
        set lady half wish. Hard sing an in true felt. Welcomed stronger if steepest
        ecstatic an suitable finished of oh.
      </p>
    </div>
  )
}

const mapState = null

const mapDispatch = null

export default withRouter(connect(mapState, mapDispatch)(About))
