import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class HomePage extends Component {
  componentDidMount () {
    let canvas = this.refs.canvas
    let stage = new createjs.Stage(canvas)
    let circle = new createjs.Shape()
    circle.graphics.beginFill('DeepSkyBlue').drawCircle(50, 50, 50)
    circle.x = circle.y = 100
    stage.addChild(circle)
    stage.update()
    createjs.Tween.get(circle, {loop: true})
      .to({x: 600}, 1000, createjs.Ease.getPowInOut(4))
      .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
      .to({alpha: 0, y: 125}, 100)
      .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
      .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }

  render () {
    return (
      <div>
        <canvas ref='canvas' width='800' height='200'></canvas>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = null

const mapDispatch = null

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(HomePage))

/**
 * PROP TYPES
 */
HomePage.propTypes = {

}
