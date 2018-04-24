import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PortfolioPic from '../../public/images/PortfolioSitePic.jpg'
import resume from '../../public/Maria_Betances_Resume.pdf'
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
      <img
        src={PortfolioPic}
        className='portfolio-pic'
        width='200vw'
        height='225vh'
      />
      <div className='about-links'>
        <a href='https://github.com/mbetances805'>
          <img
            src='https://image.flaticon.com/icons/svg/25/25231.svg'
            width='25px'
            height='25px'
          />
        </a>
        <a href='https://www.linkedin.com/in/mariabetances/'>
          <img
            src='https://image.flaticon.com/icons/svg/25/25320.svg'
            width='25px'
            height='25px'
          />
        </a>
        <a href='https://medium.com/@mbetances1002'>
          <img
            src='https://image.flaticon.com/icons/svg/725/725376.svg'
            width='25px'
            height='25px'
          />
        </a>
        <a href={resume}>
          <img
            src='https://image.flaticon.com/icons/svg/559/559233.svg'
            width='25px'
            height='25px'
          />
        </a>
      </div>
      <Dot id='fourth-dot' radius={'20'} color='DeepSkyBlue' />
      <Dot id='fifth-dot' radius={'50'} color='#D2BBEE' />
      <Dot id='sixth-dot' radius={'40'} color='#4A5fD3' />
      <div className='about-paragraph'>
        <p className='about-paragraph-list'>{'Web Developer'}</p>
        <p className='about-paragraph-list'>{'Analytical'}</p>
        <p className='about-paragraph-list'>{'Team Player'}</p>
        <p className='about-paragraph-list'>{'Passionate'}</p>
        <p className='about-paragraph-list'>{'Vegan Foodie'}</p>
      </div>
      <p className='initials' id='about-initials'>{'MB'}</p>
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

export default withRouter(connect(mapState, mapDispatch)(About))
