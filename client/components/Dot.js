import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Dot extends Component {
  componentDidMount () {
    let {radius} = this.props
    let {color} = this.props
    let canvas = this.refs.canvas
    let stage = new createjs.Stage(canvas)
    let circle = new createjs.Shape()
    circle.graphics.beginFill(color).drawCircle(0, 0, radius)
    circle.x = circle.y = 50
    stage.addChild(circle)
    stage.update()
    // createjs.Tween.get(circle, {loop: true})
    //   .to({x: 600}, 1000, createjs.Ease.getPowInOut(4))
    //   .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
    //   .to({alpha: 0, y: 125}, 100)
    //   .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
    //   .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
    // createjs.Ticker.setFPS(60);
    // createjs.Ticker.addEventListener("tick", stage);
  }

  render () {
    let { id } = this.props
    return (
      <div className='dot' id={id}>
        <canvas ref='canvas' width='100' height='100'></canvas>
      </div>
    )
  }
}

const mapState = null

const mapDispatch = null

export default withRouter(connect(mapState, mapDispatch)(Dot))

Dot.propTypes = {

}
